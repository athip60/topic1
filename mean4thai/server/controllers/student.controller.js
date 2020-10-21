const Joi = require("joi");
const Student = require("../models/student.model");

const studentSchema = Joi.object({
  sid: Joi.number().integer().required(),
  first: Joi.string().required(),
  last: Joi.string().required(),
});

module.exports = {
  insert,
  get,
  getAll,
  search,
  deleteData
};

async function insert(student) {
  student = await Joi.validate(student, studentSchema, { abortEarly: false });
  return await new Student(student).save();
}
/**
 * อ่านเพิ่มเติม https://mongoosejs.com/docs/api.html
 */
async function get(_id) {
  return await Student.find({ _id: _id });
}

async function getAll() {
  return await Student.find();
}

async function search(key, value) {
  let query = {};
  query[key] = value;
  return await Student.find(query);
}

async function deleteData(_id) {
  return await Student.findByIdAndDelete(_id)
}
