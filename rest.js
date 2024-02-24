// const express = require("express");
// require("./database/connection.js");
// const OurRouter = require("./router/ourRoutes.js");
// const app = express();

// const port = process.env.PORT || 7000;

// app.use(express.json());    // { express.json } ka use krke undefined ht jaygea , bcoz json object ko read krne m help krega

// app.use(OurRouter);

// app.listen(port, () => {
//     console.log(`Yo bro , Server l ive at port : ${port}`);
// });


//---------------------------------------------------------
const express = require("express");
const cors = require("cors");
const path = require("path");
require("./database/connection.js");
const { createProxyMiddleware } = require('http-proxy-middleware');
const OurRouter = require("./router/ourRoutes.js");
const app = express();

const port = process.env.PORT || 7000;

app.use(cors());
app.use(express.json());

// API routes
app.use(OurRouter);

// Use the proxy middleware to forward API requests to the server
app.use('/api', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));

app.listen(port, () => {
    console.log(`Yo bro, Server live at port: ${port}`);
});
