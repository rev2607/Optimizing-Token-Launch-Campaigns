const mongoose = require('mongoose');

const CampaignSchema = new mongoose.Schema({
    name: String,
    description: String,
    launchDate: Date,
    fundsRaised: Number,
    tokenSymbol: String
});

module.exports = mongoose.model('Campaign', CampaignSchema);
