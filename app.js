const express = require('express');
const app = express();
const musicRoutes = require('./routes/musicRoutes');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); 

app.use('/', musicRoutes);

app.listen(3005, () => {
    console.log('Server running on http://localhost:3005');
});
