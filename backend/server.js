const app = require('./app');
const dotenv= require("dotenv");
const connectiondatabase = require("./database/database");
//require

dotenv.config({path:"backend/config/config.env"});
//set after config
connectiondatabase()


app.listen(process.env.PORT,()=>{
    console.log(`connection stablize on http://localhost:${process.env.PORT}`)
})