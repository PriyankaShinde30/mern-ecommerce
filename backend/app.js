const express = require('express');
const cors = require('cors');

const app = express();

//middleware 
app.use(cors());
app.use(express.json());

//routes
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');

app.use('/api/auth', authRoutes);
app.use('api/products', productRoutes);

//server start 
app.listen(5000, () => {
    console.log("Server is listening");
});