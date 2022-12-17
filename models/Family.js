const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FamilySchema = new Schema({
    name: { type: String, required: true, maxLength: 100 },
    description: { type: String },
    url: { type: String },
    photo_url: { type: String },
    aimal: [{ type: Schema.Types.ObjectId, ref: "Family" }],
    parent_family: [{ type: Schema.Types.ObjectId, ref: "Family" }],
});

module.exports = mongoose.model("Family", FamilySchema);
