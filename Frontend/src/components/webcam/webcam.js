import React, { useState } from "react";
import axios from "axios";
import Webcam from "react-webcam";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import "./webcam.css";
import Avatar from "@mui/material/Avatar";
import Box from '@mui/material/Box';


const WebcamCapture = (props) => {
  const webcamRef = React.useRef(null);
  const videoConstraints = {
    width: 200,
    height: 200,
    facingMode: "user",
  };
  const [name, setName] = useState("");
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    props.onClickMe(imageSrc);
  }, [webcamRef]);

  return (
    <div>
      <Box 
      sx={{
        marginTop: 3,
      }}>
      <Webcam
        audio={false}
        height={300}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={350}
        videoConstraints={videoConstraints}
      /></Box>
      {/* to send photo to backend */}
      <div className="wrap">
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom:3,
            color: 'secondary.main'
          }}
        >
      <Avatar sx={{ m:0.2, bgcolor: "secondary.main", className:"icon_cam"}}>
        <AddAPhotoIcon></AddAPhotoIcon>
      </Avatar>
          <button onClick={capture} type="button" className="btn-click-photo">
            Click My Photo!
          </button>
          </Box>
      </div>
    </div>
  );
};

export default WebcamCapture;
