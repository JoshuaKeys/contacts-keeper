const express = require('express');
const connectDB = require('./db/db');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to the ContactsKeeper API...' })
);

// Initialize Database
connectDB();

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('./api/contacts', require('./routes/api/contacts'));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
