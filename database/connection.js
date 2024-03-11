const mongoose = require("mongoose");
require('dotenv').config(); 

// const URL= process.env.MONGODB_URL;
const URL= "mongodb://127.0.0.1:27017/mental_health";

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


// home.iitk.ac.in/~
// prof vishwakarma iit indore