// Enable Datadog tracing before anything else
require('dd-trace').init();

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Node.js with Datadog APM!');
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});
