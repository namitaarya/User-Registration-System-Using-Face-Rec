import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import WebcamCapture from "../webcam/webcam"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from "@mui/material/Avatar";
import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';
const Register = () => {

    const history = useHistory()

    const [ image, setImage] = useState();

    
    const updateImage = e => {
        setImage(e);
    }

    const register = () => {
        const name = document.getElementsByName("name")[0].value;
        const email = document.getElementsByName("email")[0].value;
        const password = document.getElementsByName("password")[0].value;
        const reEnterPassword = document.getElementsByName("reEnterPassword")[0].value;
        const imageSource = new Buffer.from(image.split(",")[1], 'base64');
        // const { name, email, password, reEnterPassword, imageSource } = user
        const user = {
            name,
            email,
            password,
            reEnterPassword,
            imageSource
        };
        if( name && email && password && (password === reEnterPassword) && imageSource){
            axios.post("http://localhost:3001/register", user)
            .then( res => {
                alert(res.data.message)
                history.push("/login")
            })
        } else {
            alert("invlid input")
        }
        
    }

    return (
        
        <div className="register">
            <Box
          sx={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 2,
          }}
        >
        <Avatar sx={{ m: 1, bgcolor: "#e73c7e", className:"icon"}}>
        <LockOutlinedIcon></LockOutlinedIcon>
      </Avatar>

            <h1>Register</h1>
            </Box>
            <input type="text" name="name" placeholder="Your Name" required></input>
            <input type="text" name="email" placeholder="Your Email" required></input>
            <input type="password" name="password" placeholder="Your Password" required></input>
            <input type="password" name="reEnterPassword" placeholder="Re-enter Password" required></input>
            <WebcamCapture onClickMe={updateImage}></WebcamCapture>
            <div className="button" onClick={register} >Register</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/login")}>Login</div>
        </div>
    )
}

export default Register