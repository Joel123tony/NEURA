console.log("🚀 Starting MongoDB connection test...");

const mongoose = require('mongoose');
require('dotenv').config();

console.log("🔍 MONGO_URI:", process.env.MONGO_URI);

const uri = process.env.MONGO_URI || "mongodb+srv://kutty:joel1234@cluster0.wskiz.mongodb.net/my-backend";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("✅ Connected to MongoDB successfully!");
        mongoose.connection.close();
    })
    .catch(err => console.error("❌ MongoDB connection error:", err));
