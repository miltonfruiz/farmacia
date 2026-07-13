const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function register(req, res) {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).send({ message: 'User already exists' });
    }
    const newUser = await User.create({ username, password: hashedPassword });
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.send({ token, username: newUser.username });
  } catch (error) {
    res.status(500).send({ message: 'Error registering user' });
  }
}

async function login(req, res) {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).send({ message: 'Invalid username or password' });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).send({ message: 'Invalid username or password' });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.send({ token, username: user.username });
  } catch (error) {
    res.status(500).send({ message: 'Error logging in user' });
  }
}

async function logout(req, res) {
  try {
    res.clearCookie('jwt');
    res.send({ message: 'User logged out' });
  } catch (error) {
    res.status(500).send({ message: 'Error logging out user' });
  }
}

module.exports = { register, login, logout };