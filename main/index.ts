require('app-module-path').addPath(__dirname);
import express from "express"
import bodyParser from "body-parser"
import MongoConnection from "contrib/connections/mongo";
import AllRoutes from "routes/allRoutes"
const port = 1300;



MongoConnection.getInstance();

const app = express();
app.listen(port, ()=> {
    console.log("server on port ", `${port}`);
});

app.use(bodyParser.json());
new AllRoutes(app);
