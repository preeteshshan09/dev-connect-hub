const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://preeteshshan09_db_user:bLehV8hcagCnwEyI@preeteshmongo01.dqzpoir.mongodb.net/devConnectHub");
};

module.exports = connectDB;