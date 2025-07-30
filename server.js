const express = require('express');
const app = express();
app.use(express.json());

// // Root Route
// app.get('/', (req, res) => {
//   res.send('API is running...');
// });

// // New Route: /api
// app.get('/api', (req, res) => {
//   res.send('hi');
// });

// app.get('/api/healthy', (req, res) => {
//   res.send('OK-It is healthy');
// });
app.listen(1080,()=>{
    console.log("Server is running")
});