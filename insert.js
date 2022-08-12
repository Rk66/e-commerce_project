//const { resourceLimits } = require('worker_threads');
//const dbConnect= require('./index')
const dbConnect = require('./dbmongo')
const mongoose = require('mongoose');
//const { FindCursor } = require('mongodb');

const insert = async () => {
    await dbConnect();
    const studentSchema = new mongoose.Schema({
        name: String,
        age: Number,
        mark1: Number,
        mark2: Number,
        mark3: Number,
        grade: String

    })
    const Student = mongoose.model('Student', studentSchema, 'studentResult');
    const student1 = new Student()
    const result = await student1.save();
    Student.find((err, result) => {
        if (err) {
            console.log(err)
        }
        console.log({ result })
    })

    const updateInDB = async () => {
        const Student = mongoose.model('Student', studentSchema, 'studentResult');
        const data1 = await Student.updateOne(
            { name: "Raju" },
            {
                $set: { name: "Ram" }
            }
        )
        console.log(data1)
    }

    updateInDB()
}


//insert();

module.exports = insert;