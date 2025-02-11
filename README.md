# american-sign-language-app
Website for teaching american sign language using hand pose detection.

## 🖐 HandTalk - Real-Time ASL Recognition
(Replace with an actual image or GIF of your app in action.)

## 📌 Overview
HandTalk is a real-time American Sign Language (ASL) recognition application that helps users learn and practice ASL by detecting and classifying hand gestures through their webcam. It leverages computer vision and deep learning to provide instant feedback and track user progress interactively.

The project utilizes TensorFlow.js, HandPose, and Fingerpose for hand detection and classification. The frontend is built using React.js and Chakra UI, offering a seamless user experience with a structured progress-based learning system.

## 🚀 Features
✅ Real-time ASL Alphabet Detection – Uses a deep learning pipeline to classify ASL hand gestures dynamically.
✅ Interactive Learning System – Step-by-step ASL alphabet training with feedback and animations.
✅ Gesture Validation System – Highlights correct gestures with a visual confirmation circle.
✅ Progress Tracking – Users can navigate through the ASL alphabet with a sidebar and progress bar.
✅ Web-based Application – No installations required; runs entirely in a browser using TensorFlow.js.

## 🏗 Tech Stack
Frontend: React.js, Chakra UI
Machine Learning: TensorFlow.js, HandPose, Fingerpose
Computer Vision: Hand landmark detection, feature extraction, gesture classification
State Management: React Hooks (useState, useEffect)
UI/UX Enhancements: Animated feedback, real-time progress tracking
🛠 Setup & Installation
To run HandTalk locally, follow these steps:

1️⃣ Clone the repository:
 ```
sh
Copy
Edit
git clone https://github.com/yourusername/handtalk-asl.git
cd handtalk-asl
 ```
2️⃣ Install dependencies:
 ```
sh
Copy
Edit
npm install
 ```
3️⃣ Start the development server:
 ```
sh
Copy
Edit
npm start
 ```
The app will open at http://localhost:3000.

## 📸 Screenshots
(Include images/GIFs of the app in action.)

## 📖 How It Works
Enable Webcam – The app accesses the webcam to detect hand gestures.
Gesture Recognition – HandPose detects hand landmarks, and Fingerpose classifies gestures.
Real-time Feedback – If a gesture matches the target ASL letter, a green confirmation circle appears.
Progress Navigation – Users move through the alphabet with a sidebar and progress tracker.
