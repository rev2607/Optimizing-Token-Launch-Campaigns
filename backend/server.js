const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const campaignRoutes = require('./routes/campaigns');
const { MONGO_URI } = require('./config');

const app = express();
app.use(cors());
app.use(express.json());

require('dotenv').config();
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected Successfully"))
.catch(err => console.error("❌ MongoDB Connection Error:", err));

app.use('/api/campaigns', campaignRoutes);

app.get('/', (req, res) => {
    res.send('Token Launch Campaign Analyzer Backend');
});

const PORT = 5005;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


