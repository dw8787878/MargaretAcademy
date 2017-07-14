'use strict';


const Student = require('./student.js')
const Campus = require('./campus.js')

Student.belongsTo(Campus);

module.exports = { Student, Campus }
