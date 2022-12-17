const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FeatureSchema = new Schema({
    name: { type: String, required: true, maxLength: 100 },
    description: { type: String },
    url: { type: String },
    photo_url: { type: String },
    animal: [{ type: Schema.Types.ObjectId, ref: "Animal" }],
});

module.exports = mongoose.model("Feature", FeatureSchema);
