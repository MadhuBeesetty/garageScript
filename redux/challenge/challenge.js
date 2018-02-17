const express=require('express');
const app = express();
app.listen(3761);
app.use(express.static('public'))

