'use strict'
const api = require('express').Router();
const db = require('../db');
const models = require('../db/models');
const Student = models.Student;
const Campus = models.Campus;

var bodyParser = require('body-parser');
api.use(bodyParser.urlencoded({extended: false}));
api.use(bodyParser.json());

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!

//Easter Egg - http://localhost:1337/api/hello
api.get('/hello', (req, res) => res.send({hello: 'world'}))

//GET CAMPUS
api.get('/allCampuses', (req, res, next) =>{
	Campus.findAll({})
			.then(campuses => res.json(campuses))
			.catch(next);
});

api.get('/campus/:id', (req,res,next) => {
	let campusId = req.params.id;

	Campus.findOne({
			where : { id : campusId }
	})
	.then((campus) => {
			if (campus === null) { return next(new Error('That campus was not found!')) }
			return res.json(campus)
	})
	.catch(next);
});

api.get('/allStudent', (req, res, next) => {
	Student.findAll({})
		.then(students => res.json(students))
		.catch(next);
});

api.get('/student/:id', (req, res, next)=> {
	let studentId = req.params.id;

	Student.findOne({
			where : { id : studentId }
	})
	.then((student) => {
			if (student === null) { return next(new Error('That student was not found!')) }
			return res.json(student)
	})
	.catch(next);
});

//POST
//- new campus
api.post('/campus', (req, res, next) => {
	  Campus.create(req.body)
    .then( function (newCampus){
    	res.status(200).send(
      	{ message : 'New campus created successfully',
        	newCampus : newCampus
      	}
			);
    })
  .catch(next)
  });

//- new student
api.post('/student', (req, res, next) => {
		Student.create(req.body)
		.then( function (newStudent){
    	res.status(200).send(
      { message : 'New student created successfully',
        newStudent : newStudent
      });
    })
  .catch(next)
  });


// PUT
// - update student info for one student
api.put('/student/:id', (req, res, next) => {
	Student.update(req.body, {
		where: { id: req.params.id },
		returning: true
	})
	.then( (updatedStudent, affectedRows) => {
		res.status(302).send(updatedStudent)
	})
	.catch(next)
})

// - update campus info for one campus
api.put('/campus/:id', (req, res, next) => {
	Campus.update(req.body, {
		where: { id: req.params.id },
		returning: true
	})
	.then( (updatedCampus, affectedRows) => {
		res.status(302).send(updatedCampus)
	})
	.catch(next)
})


//DELETE

// delete a campus
api.delete('/campus/:id', (req, res, next) => {
  Campus.destroy({
    where: { id: req.params.id }
  })
	.then(deleted => {
		if (deleted){
    	res.status(200).send(
				{	message: "Campus deleted succesful!" }
			)
		}
	})
	.catch(next)
});

//delete a student
api.delete('/student/:id', (req, res, next) => {
  Student.destroy({
    where: { id: req.params.id }
  })
	.then(deleted => {
		if (deleted){
    	res.status(200).send(
				{	message: "Student deleted succesful!" }
			)
		}
	})
	.catch(next)
});


module.exports = api
