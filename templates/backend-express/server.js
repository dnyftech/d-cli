const express = require('express');
const statusRoute = require('./routes/status');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use('/api', statusRoute);

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
