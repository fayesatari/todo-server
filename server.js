import express from 'express';
import router from './routes/routes.js'

const app = express();
app.use(express.json());
app.use(router);

app.listen(8080,()=>{
    console.log("Server is running")
});