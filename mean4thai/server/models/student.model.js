const mongoose = require('mongoose');

/**
 * อ่านเพิ่มเติม https://mongoosejs.com/docs/guide.html
 */
const StudentSchema = new mongoose.Schema(
  {
    title:     { type: String, required: true },
    description:      { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    // sid:       { type: String, required: true },
    // first:     { type: String, required: true },
    // last:      { type: String, required: true },
    // createdAt: { type: Date, default: Date.now },
  },
  {
    versionKey: false
  }
);


module.exports = mongoose.model('Student', StudentSchema);
