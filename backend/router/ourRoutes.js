const express = require("express");
const router = new express.Router();
const { Student } = require("../models/students");
const bcrypt = require("bcrypt")




// -------------- GET -------------

router.get("/test", async (req,res) => {
    try {
            res.status(201).send("hui hui you are here at backend test");

    }catch(err){
        console.log(err.message);
    }
})



// -------------------------- POST ------------------------------


router.post("/students", async (req,res) => {    // async function
    
try{ 
    const user_student = new Student(req.body);
    const userCreate = await user_student.save();
    res.status(201).send(`Student data saved :) hui hui ${userCreate}`);
    console.log(`Date saved : ${userCreate} --- Date saved Successfully :)` );

}catch(err) {
        console.log("Date NOT Saved :: NO NO NO ");
        console.log(err);
        res.status(400).send(err);
}
});


///-------------------------for Student regis-------------

router.post("/regis", async (req,res) => {    // async function
    
    try{ 
        const response = new Student(req.body);

        
        const result = await response.save();
        res.status(201).send(`Robo date saved :) hui hui ${response}`);
        console.log(`Date saved : ${result} --- Date saved Successfully :)` );
    
    }catch(err) {
            console.log("Date NOT Saved :: NO NO NO ");
            console.log(err);
            res.status(400).send(err);
    }
    });

///-------------------------get Student LOGIN-------------


router.post("/login", async (req,res) => {    // async function
    
    try{ 
        let email = req.body.email;
        let password = req.body.password;

        const emailCheck = await Student.find( {email : email});
console.log("in try ")
// console.log(emailCheck)
// console.log(email)
// console.log(password)

if(emailCheck.length >0 ){
    
    console.log("inside : emchk")
    
    console.log(password)
    const user = emailCheck[0];

        
    const passCheck = await bcrypt.compare(password,user.password)
    console.log(passCheck);
            // if( user.password === password){
            if(passCheck){
                console.log(" Tu genuine h ");
                // res.send("Tu genuine h ");
                let uId = user._id;
                res.send({
                    status: 'success', 
                    userId: uId,
                    message: 'Login successful',
                  });
                // res.send(uId);
            }
            else{
                // alert("Data is not correct")
                res.send("Data is not correct");
            }
        } else{ 
            // alert("User Not found. Please Register First.")
            res.send("User Not found. Please Register First.");
        }
    
    }catch(err) {
            console.log("NO user found Error ");
            console.log(err);
            res.status(400).send(err);
    }
    });



module.exports = router;