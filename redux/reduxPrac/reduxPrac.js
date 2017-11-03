const express = require('express');
const app = express();
app.listen(3140);
app.use(express.static('public'))
;
