const express = require('express');
const app = express();
const path = require('path');
const userRoutes = require('./routes/userRoutes');
const morgan = require('morgan');
const port = process.env.PORT || 8010;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});


