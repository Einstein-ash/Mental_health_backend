const mongoose = require("mongoose");
require('dotenv').config(); 

const URL= process.env.MONGODB_URL;

const connection = async () => {
     
    try{
        // const connResult = await mongoose.connect(URL);
        const connResult = await mongoose.connect(URL);
      
        if(connResult){ console.log(`Connection Succesfull with MONGO`)}

    }catch(err) {
        console.log("Connection Failed with MONGO ")
    }
};

connection();
