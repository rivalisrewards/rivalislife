import React,{useRef} from "react"
import { processVideoStream } from "../engine/FrameProcessor"

export default function CameraAnalyzer({setResults}){
  const videoRef = useRef();
  const streamRef = useRef();
  const [cameraActive, setCameraActive] = React.useState(false);
  const [stopped, setStopped] = React.useState(false);

  async function startCamera() {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
    streamRef.current = stream;
    setCameraActive(true);
    setStopped(false);
  }

  function stopCamera() {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setCameraActive(false);
      setStopped(true);
    }
  }

  async function analyze() {
    if (!stopped) {
      alert("Please stop the camera before analyzing.");
      return;
    }
    const results = await processVideoStream(videoRef.current);
    setResults(results);
  }

  return (
    <div>
      <h3>Camera Swing</h3>
      <video ref={videoRef} autoPlay />
      <button onClick={startCamera} disabled={cameraActive}>Start</button>
      <button onClick={stopCamera} disabled={!cameraActive}>Stop</button>
      <button onClick={analyze} disabled={!stopped}>Analyze</button>
    </div>
  );
}
