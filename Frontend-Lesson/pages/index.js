import React, { useRef, useState, useEffect } from "react"
import * as tf from "@tensorflow/tfjs"
import * as handpose from "@tensorflow-models/handpose"
import Webcam from "react-webcam"
import { drawHand } from "../components/handposeutil"
import * as fp from "fingerpose"
import Handsigns from "../components/handsigns"
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";


import {
  Text,
  Heading,
  Button,
  Image,
  Stack,
  Container,
  Box,
  VStack,
  ChakraProvider,
  Select,
} from "@chakra-ui/react"

import { Signimage, Signpass } from "../components/handimage"

import About from "../components/about"
import Metatags from "../components/metatags"
import Header from "../components/header"

// import "../styles/App.css"

// import "@tensorflow/tfjs-backend-webgl"

import { RiCameraFill, RiCameraOffFill } from "react-icons/ri"


export default function Home() {
  const webcamRef = useRef(null)
  const canvasRef = useRef(null)

  const [camState, setCamState] = useState("on")

  const [sign, setSign] = useState(null)
  const [signList, setSignList] = useState([])
  const [currentSign, setCurrentSign] = useState(0)
  const currentSignRef = useRef(currentSign);
  const [gamestate, setGamestate] = useState("started")

  // let net;

  async function runHandpose() {
    async function doDetect(){
      await detect(net,currentSign)
    }
    const net = await handpose.load()
    _signList()

    // window.requestAnimationFrame(loop);

    return setInterval(() => {
      doDetect()
    }, 150)
  }

  function _signList() {
    setSignList(generateSigns())
  }

  function generateSigns() {
    return Signpass.sort((a, b) => a.alt.localeCompare(b.alt)) // Sort the signs in alphabetical order
  }

  async function detect(net,currentSign) {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video
      const videoWidth = webcamRef.current.video.videoWidth
      const videoHeight = webcamRef.current.video.videoHeight

      // Set video width
      webcamRef.current.video.width = videoWidth
      webcamRef.current.video.height = videoHeight

      // Set canvas height and width
      canvasRef.current.width = videoWidth
      canvasRef.current.height = videoHeight

      // Make Detections
      const hand = await net.estimateHands(video)


      if (hand.length > 0) {

        //loading the fingerpose model
        const GE = new fp.GestureEstimator([
          fp.Gestures.ThumbsUpGesture,
          Handsigns.aSign,
          Handsigns.bSign,
          Handsigns.cSign,
          Handsigns.dSign,
          Handsigns.eSign,
          Handsigns.fSign,
          Handsigns.gSign,
          Handsigns.hSign,
          Handsigns.iSign,
          Handsigns.jSign,
          Handsigns.kSign,
          Handsigns.lSign,
          Handsigns.mSign,
          Handsigns.nSign,
          Handsigns.oSign,
          Handsigns.pSign,
          Handsigns.qSign,
          Handsigns.rSign,
          Handsigns.sSign,
          Handsigns.tSign,
          Handsigns.uSign,
          Handsigns.vSign,
          Handsigns.wSign,
          Handsigns.xSign,
          Handsigns.ySign,
          Handsigns.zSign,
        ])

        const estimatedGestures = await GE.estimate(hand[0].landmarks, 6.5)
        // document.querySelector('.pose-data').innerHTML =JSON.stringify(estimatedGestures.poseData, null, 2);

        if (
          estimatedGestures.gestures !== undefined &&
          estimatedGestures.gestures.length > 0
        ) {

          const confidence = estimatedGestures.gestures.map(p => p.confidence)
          const maxConfidence = confidence.indexOf(
            Math.max.apply(undefined, confidence)
          )

          //setting up game state, looking for thumb emoji
          if (
            estimatedGestures.gestures[maxConfidence].name === "thumbs_up" &&
            gamestate !== "played"
          ) {
            setGamestate("played")
            _signList()
            document.querySelector("#app-title").innerText = ""
            // document.getElementById("emojimage").classList.add("play")
            // document.querySelector(".tutor-text").innerText = "make a hand gesture based on letter shown below"
          } else if (gamestate === "played") {

            document.querySelector("#app-title").innerText = ""

            // //looping the sign list
            // if (currentSign === signList.length) {
            //   _signList()
            //   setCurrentSign(0)
            //   return
            // }

            // console.log(signList[currentSign].src.src)

            //game play state

            if (
              typeof signList[currentSignRef.current].src.src === "string" ||
              signList[currentSignRef.current].src.src instanceof String
            ) {
              // document
              //   .getElementById("emojimage")
              //   .setAttribute("src", signList[currentSignRef.current].src.src)
              if (
                signList[currentSignRef.current].alt ===
                estimatedGestures.gestures[maxConfidence].name
              ) {
                setCurrentSign((currentSignRef.current+1)%26)
                // Display the green circle
                const correctSignCircle = document.getElementById("correct-sign-circle")
                correctSignCircle.style.opacity = 1

                // Hide the green circle after 1 second
                setTimeout(() => {
                  correctSignCircle.style.opacity = 0
                }, 1000)
                return
              }
              setSign(estimatedGestures.gestures[maxConfidence].name)
            }
          } else if (gamestate === "finished") {
            return
          }
        }
      }
      // Draw hand lines
      const ctx = canvasRef.current.getContext("2d")
      drawHand(hand, ctx)
    }
  }

  //   if (sign) {
  //     console.log(sign, Signimage[sign])
  //   }

  useEffect(()=>{
    document.querySelector("#app-title").innerText = "Make a 👍 gesture with your hand to start"
  },[])

  useEffect(() => {
    const interval = runHandpose()

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    }
  }, [gamestate])

  useEffect(()=>{
    currentSignRef.current = currentSign
  },[currentSign])

  // useEffect(()=>{
  //   async function doDetect(){
  //     await detect(net,currentSign)
  //   }
    
  //   if(net){
  //     setInterval(() => {
  //       doDetect()
  //     }, 150)
  //   }
  // },[gamestate,currentSign])

  function turnOffCamera() {
    if (camState === "on") {
      setCamState("off")
    } else {
      setCamState("on")
    }
  }
  // Handle alphabet navigation
  function changeAlphabet(direction) {
    if (direction === "prev" && currentSign > 0) {
      setCurrentSign((prev) => prev - 1);
    } else if (direction === "next" && currentSign < signList.length - 1) {
      setCurrentSign((prev) => prev + 1);
    }
  }

  return (
    <ChakraProvider>
      <Metatags />
      <Header />
      <Box id="main" bgColor="#5AB6E2">


        <Box display="flex" id="left-bar" bgColor="#D0D0D0">
          {/* Left Sidebar with Instructions */}
          {/* Dropdown Menu */}
          <Select
            id="main-select"
            placeholder="Select Sign"
            value={signList[currentSign]?.alt}
            onChange={(event) => {
              const selectedSign = event.target.value;
              const index = signList.findIndex((sign) => sign.alt === selectedSign);
              if (index !== -1) {
                setCurrentSign(index);
              }
            }}
            size="lg"
            iconColor="white"
            
          >
            {signList.map((sign, index) => (
              <option key={index} value={sign.alt}>
                {sign.alt}
              </option>
            ))}
          </Select>

          <Box
            id="left-bar-content"
          >
            <Image
                src={`/alphabets_gif/${signList[0] ? signList[currentSign].alt : 'a'}.gif`} // Using provided second image path
                alt='Alphabet GIF'
                borderRadius="md"
                objectFit="cover"
                mb={5}
              />
          

            {/* Short Description */}
            <Text fontSize="lg">
              {signList[currentSign]?.desc ||
                "Make a fist with your thumb against the side of your index finger."}
            </Text>

            {/* Instructional Image */}
            <Image
              src={`/alphabets_img/${signList[0] ? signList[currentSign].alt: 'a'}.png`} // Using provided second image path
              borderRadius="md"
              mt={20} mb={5}
            />
          </Box>
        </Box>

        {/* Main Content Area */}
        <Box id="nav-bar">
          {/* Navigation Buttons */}
          <Stack id="progress" direction="row" align="center">
            <Button
              className="progress"
              leftIcon={<FiArrowLeft size={20} />}
              onClick={() => setCurrentSign((prev) => Math.max(prev - 1, 0))}
              colorScheme="gray"
              variant="outline"
              isDisabled={currentSign === 0}
            >
              Previous
            </Button>

            <Text color="white" className="progress">{`${currentSign + 1}/26`}</Text>

            <Button
              className="progress"
              rightIcon={<FiArrowRight size={20} />}
              onClick={() =>
                setCurrentSign((prev) =>
                  prev < signList.length - 1 ? prev + 1 : prev
                )
              }
              colorScheme="orange"
              variant="solid"
              isDisabled={currentSign === signList.length - 1}
            >
              Next
            </Button>
          </Stack>

          <Stack id="start-button" direction="row" align="center">
            {/* <Button>
          <Stack id="start-button" direction="row" align="center">
            <Button
              leftIcon={
                camState === "on" ? (
                  <RiCameraFill size={20} />
                ) : (
                  <RiCameraOffFill size={20} />
                )
              }
              onClick={turnOffCamera}
              colorScheme="orange"
            >
              Camera
            </Button> */}
            <About />
          </Stack>
        </Box>
        
        <Container id="main-container" centerContent>
          <VStack spacing={4} align="center">
            <Box h="20px"></Box>
            <Heading
              as="h3"
              size="md"
              className="tutor-text"
              color="white"
              textAlign="center"
            ></Heading>
            <Box h="20px"></Box>
          </VStack>

          <Heading
            as="h1"
            size="lg"
            id="app-title"
            color="white"
            textAlign="center"
          >
            {/* 🧙‍♀️ Loading the Magic 🧙‍♂️ */}
          </Heading>

          <Box id="webcam-container">
            {camState === "on" ? (
              <Webcam id="webcam" ref={webcamRef} />
            ) : (
              <div id="webcam" background="black"></div>
            )}

            {/* {sign ? (
              <div
                style={{
                  position: "absolute",
                  marginLeft: "auto",
                  marginRight: "auto",
                  right: "calc(50% - 50px)",
                  bottom: 100,
                  textAlign: "-webkit-center",
                }}
              >
                <Text color="white" fontSize="sm" mb={1}>
                  detected gestures
                </Text>
                <img
                  alt="signImage"
                  src={
                    Signimage[sign]?.src
                      ? Signimage[sign].src
                      : "/loveyou_emoji.svg"
                  }
                  style={{
                    height: 30,
                  }}
                />
              </div>
            ) : (
              " "
            )} */}
          </Box>

          <canvas id="gesture-canvas" ref={canvasRef} style={{}} />

          {/* <Box
            id="singmoji"
            style={{
              zIndex: 9,
              position: "fixed",
              top: "50px",
              right: "30px",
            }}
          ></Box> */}
          {/* {gamestate==="played" && <Image className="play" h="150px" objectFit="cover" id="emojimage" src={signList[currentSign].src.src}/>} */}
          
          {/* <pre className="pose-data" color="white" style={{position: 'fixed', top: '150px', left: '10px'}} >Pose data</pre> */}

          <div
            id="correct-sign-circle"
            style={{
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              border: "30px solid #98FB98",
              opacity: 0,
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 10,
            }}
          ></div>
        </Container>



      </Box>
    </ChakraProvider>
  )
}
