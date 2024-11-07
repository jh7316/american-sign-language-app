
import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import { drawHand } from "../components/handposeutil";
import * as fp from "fingerpose";
import Handsigns from "../components/handsigns";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import {
  Text,
  Heading,
  Button,
  Image,
  Stack,
  Box,
  VStack,
  ChakraProvider,
} from "@chakra-ui/react";

import { Signimage, Signpass } from "../components/handimage";
import About from "../components/about";
import Metatags from "../components/metatags";

export default function Home() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [camState, setCamState] = useState("on");
  const [sign, setSign] = useState(null);
  const [currentSign, setCurrentSign] = useState(0);
  const [gamestate, setGamestate] = useState("started");

  let signList = Signpass;

  async function runHandpose() {
    const net = await handpose.load();
    setInterval(() => {
      detect(net);
    }, 150);
  }

  async function detect(net) {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const hand = await net.estimateHands(video);

      if (hand.length > 0) {
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
        ]);

        const estimatedGestures = await GE.estimate(hand[0].landmarks, 6.5);

        if (gamestate === "started") {
          document.querySelector("#app-title").innerText =
            "Make a 👍 gesture with your hand to start";
        }

        if (
          estimatedGestures.gestures !== undefined &&
          estimatedGestures.gestures.length > 0
        ) {
          const confidence = estimatedGestures.gestures.map((p) => p.confidence);
          const maxConfidence = confidence.indexOf(
            Math.max.apply(undefined, confidence)
          );

          if (
            estimatedGestures.gestures[maxConfidence].name === "thumbs_up" &&
            gamestate !== "played"
          ) {
            setGamestate("played");
            document.getElementById("emojimage").classList.add("play");
            document.querySelector(".tutor-text").innerText =
              "make a hand gesture based on letter shown below";
          } else if (gamestate === "played") {
            document.querySelector("#app-title").innerText = "";

            if (currentSign === signList.length) {
              setCurrentSign(0);
              return;
            }

            if (
              typeof signList[currentSign].src.src === "string" ||
              signList[currentSign].src.src instanceof String
            ) {
              document
                .getElementById("emojimage")
                .setAttribute("src", signList[currentSign].src.src);

              if (
                signList[currentSign].alt ===
                estimatedGestures.gestures[maxConfidence].name
              ) {
                setCurrentSign((prev) => prev + 1);

                const correctSignCircle = document.getElementById(
                  "correct-sign-circle"
                );
                correctSignCircle.style.opacity = 1;

                setTimeout(() => {
                  correctSignCircle.style.opacity = 0;
                }, 1000);
              }
              setSign(estimatedGestures.gestures[maxConfidence].name);
            }
          } else if (gamestate === "finished") {
            return;
          }
        }
      }
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  }

  useEffect(() => {
    runHandpose();
  }, []);

  function turnOffCamera() {
    if (camState === "on") {
      setCamState("off");
    } else {
      setCamState("on");
    }
  }

  return (
    <ChakraProvider>
      <Metatags />
      

        {/* Main Area */}
        <Box flex="1" padding="20px" position="relative">
          <Heading as="h1" size="lg" id="app-title" color="white" textAlign="center" mb={4}>
            🧙‍♀️ Loading the Magic 🧙‍♂️
          </Heading>

          <Box id="webcam-container" mb={4} display="flex" justifyContent="center">
            {camState === "on" ? (
              <Webcam id="webcam" ref={webcamRef} />
            ) : (
              <div id="webcam" background="black"></div>
            )}
            <canvas id="gesture-canvas" ref={canvasRef} style={{ position: "absolute" }} />
          </Box>

          <Box
            id="correct-sign-circle"
            style={{
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              border: "20px solid #98FB98",
              opacity: 0,
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 10,
            }}
          ></Box>

<Box display="flex" height="100vh">
        {/* Left Sidebar with Instructions */}
        <Box
          width="25%"
          bgColor="#333"
          color="white"
          padding="20px"
          overflowY="auto"
        >
          <Heading size="lg" mb={4}>
            {signList[currentSign]?.alt}
          </Heading>
          <Stack spacing={4} mb={4}>
            {signList[currentSign]?.images?.map((img, index) => (
              <Image
                key={index}
                src={img.src}
                alt={`${signList[currentSign]?.alt} - example ${index + 1}`}
                borderRadius="md"
                objectFit="cover"
              />
            ))}
          </Stack>
          <Text mb={2} fontSize="lg">
            {signList[currentSign]?.description ||
              "Make a gesture as shown in the image above."}
          </Text>
          <Box bgColor="white" borderRadius="md" p={4} color="black">
            <Text fontWeight="bold">
              The shape resembles the letter {signList[currentSign]?.alt}
            </Text>
            <Image
              mt={2}
              src={signList[currentSign]?.diagram}
              alt={`Diagram of ${signList[currentSign]?.alt}`}
              borderRadius="md"
            />
          </Box>
        </Box>

          <Stack
            id="progress-bar"
            direction="row"
            spacing={4}
            justify="center"
            align="center"
            style={{
              backgroundColor: "#4a4a4a",
              width: "100%",
              padding: "10px",
              position: "absolute",
              bottom: 0,
            }}
          >
            <Button
              leftIcon={<FiArrowLeft size={20} />}
              onClick={() => setCurrentSign((prev) => Math.max(prev - 1, 0))}
              colorScheme="gray"
              variant="outline"
              isDisabled={currentSign === 0}
            >
              Previous
            </Button>

            <Text color="white">{`${currentSign + 1}/26`}</Text>

            <Button
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
        </Box>
      </Box>
    </ChakraProvider>
  );
}
