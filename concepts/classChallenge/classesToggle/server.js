const express = require('express');
const app = express();
app.listen(3161);
app.use(express.static('public'));
