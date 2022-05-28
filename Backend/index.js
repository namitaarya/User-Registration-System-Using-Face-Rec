import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import axios from "axios"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    imageSource: Buffer
})

const User = new mongoose.model("User", userSchema)

//Routes
app.post("/login", async (req, res)=> {
    const { email, password, imageSource} = req.body;
    User.findOne({ email: email}, async (err, user) => {
        if(user){
            if(password === user.password ) {
                const loginImage = imageSource;
                const userImage = user.imageSource.toString('base64');
                let allowLogin = false;
                try {
                    const resp = await axios.post('http://127.0.0.1:5000/api', {first: loginImage, second: userImage});
                    if (resp.data == '1') {
                        allowLogin = true;
                    }
                } catch(error) {
                    console.log(`error = ${error}`)
                }
                console.log(allowLogin);
                if (allowLogin == true) {
                    res.send({message: "Login Successful", user: user})
                } else {
                    res.send({message:"Face not recognized"})
                }
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
        console.log(err);
    })
}) 

app.post("/register", (req, res)=> {
    const { name, email, password } = req.body;
    const imageSource = req.body.imageSource;
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password,
                imageSource,
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 

app.listen(3001,() => {
    console.log("BE started at port 9002")
})