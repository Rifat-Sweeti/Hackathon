const express = require('express');
const cors = require('cors');  // <--- add this
const app = express();
const connectDB = require('./connectDB');
const authRoutes = require('./routes/authRoutes');

app.use(cors());  // <--- add this line
app.use(express.json());

connectDB();

app.use('/api', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
