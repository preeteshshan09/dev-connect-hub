const express = require('express');
const app = express();
const port = 3000;

app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});