const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AnimalSchema = new Schema({
    name: { type: String, required: true, maxLength: 100 },
    description: { type: String },
    url: { type: String },
    photo_url: { type: String },
    weight: { type: Int16Array },
    family: [{ type: Schema.Types.ObjectId, ref: "Family" }],
    official_family: [{ type: Schema.Types.ObjectId, ref: "Family" }],
    feature: [{ type: Schema.Types.ObjectId, ref: "Feature" }],
    iconic_feature: [{ type: Schema.Types.ObjectId, ref: "Feature" }],
});

module.exports = mongoose.model("Animal", AnimalSchema);
