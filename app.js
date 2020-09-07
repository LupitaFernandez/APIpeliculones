const express = require ('express');
const app = express ();
const cors = require ('cors')

const moviesRouter = require ('./routes/movies');
const seriesRouter = require ('./routes/series');

app.use (cors());

app.use (express.json ());
app.use (express.urlencoded ({extended: false}));

app.use('/movies', moviesRouter);
app.use ('/series', seriesRouter);

app.use (cors ());

app.listen (3000, function (){
    console.log ("El servidor está corriendo en el puerto 3000");
    console.log ("Link ===> http://localhost:3000")
})