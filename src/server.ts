const express = require("express");
const ip = require("ip");
// const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${ip.address()}:${port}`);
});
