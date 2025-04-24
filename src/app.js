import express from 'express';
const app = express();

//use express.json() to parse incoming requests with JSON payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //parse incoming requests with urlencoded payloads

app.use('*', (req, res) => {
  res
    .status(404)
    .json({ error: 'Server up and running, Path not found, try again' });
});

export default app;
