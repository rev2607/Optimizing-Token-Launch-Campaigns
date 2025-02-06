const express = require('express');
const Campaign = require('../models/Campaign');

const router = express.Router();

// Get all campaigns
router.get('/', async (req, res) => {
    const campaigns = await Campaign.find();
    res.json(campaigns);
});

// Create a new campaign
router.post('/', async (req, res) => {
    const campaign = new Campaign(req.body);
    await campaign.save();
    res.json(campaign);
});

module.exports = router;
