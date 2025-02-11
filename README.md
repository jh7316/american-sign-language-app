## 🖐 HandTalk - Real-Time American-sign-language-app 
(Replace with an actual image or GIF of your app in action.)

## 📌 Overview
HandTalk is a real-time American Sign Language (ASL) recognition application that helps users learn and practice ASL by detecting and classifying hand gestures through their webcam. It leverages computer vision and deep learning to provide instant feedback and track user progress interactively.

The project utilizes TensorFlow.js, HandPose, and Fingerpose for hand detection and classification. The frontend is built using React.js and Typescript, offering a seamless user experience with a structured progress-based learning system.

## 🚀 Features
✅ Real-time ASL Alphabet Detection – Uses a deep learning pipeline to classify ASL hand gestures dynamically.  
✅ Interactive Learning System – Step-by-step ASL alphabet training with feedback and animations.  
✅ Gesture Validation System – Highlights correct gestures with a visual confirmation circle.  
✅ Progress Tracking – Users can navigate through the ASL alphabet with a sidebar and progress bar.  
✅ Web-based Application – No installations required; runs entirely in a browser using TensorFlow.js.  

## 🏗 Tech Stack
Frontend: React.js, TypeScript
Machine Learning: TensorFlow.js, HandPose, Fingerpose
Computer Vision: Hand landmark detection, feature extraction, gesture classification
State Management: React Hooks (useState, useEffect)
UI/UX Development: Figma
🛠 Setup & Installation
To run HandTalk locally, follow these steps:

1️⃣ Clone the repository:
 ```
git clone https://github.com/yourusername/handtalk-asl.git
cd handtalk-asl
 ```
2️⃣ Install dependencies:
 ```
npm install
 ```
3️⃣ Start the development server:
 ```
npm start
 ```


## 📸 Screenshots


## 📖 How It Works
Enable Webcam – The app accesses the webcam to detect hand gestures.
Gesture Recognition – HandPose detects hand landmarks, and Fingerpose classifies gestures.
Real-time Feedback – If a gesture matches the target ASL letter, a green confirmation circle appears.
Progress Navigation – Users move through the alphabet with a sidebar and progress tracker.
