const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const campaignRoutes = require('./routes/campaigns');
const { MONGO_URI } = require('./config');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));

app.use('/api/campaigns', campaignRoutes);

app.get('/', (req, res) => {
    res.send('Token Launch Campaign Analyzer Backend');
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
