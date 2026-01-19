const express = require('express');
const connectDB = require('./config/database');
const app = express();
const User = require('./models/user');
const port = 3000;

// Connect to MongoDB
connectDB().then(() => {
  console.log('Database connected successfully');
  app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
}).catch((err) => {
  console.error('Database connection error:', err);
});


app.post('/signup', async (req, res) => {
    const user = new User({
        userName: 'viratKing',
        firstName: 'virat',
        LastName: 'kholi',
        email: 'virat@example.com',
        password: 'password123',
        age: 36,
        gender: 'Male'
    });
    try {
        await user.save();
        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        res.status(400).json({ message: 'Error creating user', error });
    }
});

