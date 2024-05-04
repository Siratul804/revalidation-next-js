"use client";
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const WebCam = () => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  const handleSubmit = async () => {
    if (!capturedImage) {
      alert("Please capture an image first");
      return;
    }

    console.log(capturedImage);

    // try {
    //   await fetch('/upload', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ imageData: capturedImage })
    //   });
    //   alert('Image uploaded successfully');
    // } catch (error) {
    //   console.error('Error uploading image:', error);
    //   alert('Failed to upload image');
    // }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
        <br />
        <button onClick={capture}>Capture</button>
      </div>
      {capturedImage && (
        <>
          <h2>Captured Image</h2>
          <img
            src={capturedImage}
            alt="Captured"
            style={{ maxWidth: "100%", maxHeight: "300px" }}
          />
          <br />
          <button onClick={handleSubmit}>Submit</button>
        </>
      )}
    </>
  );
};

export default WebCam;
