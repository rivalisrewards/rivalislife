import { createPose } from "./PoseEngine"
import { detectPhases } from "./PhaseDetector"
import { calculateMetrics } from "./MetricsEngine"
import { calculateTempo } from "./TempoEngine"
import { calculateSeparation } from "./SeparationEngine"
import { calculateVelocity } from "./VelocityEngine"
import { calculateScore } from "./ScoreEngine"
import { generateFeedback } from "./FeedbackEngine"

export async function processVideoFile(video){
  const pose=createPose()
  const landmarks=[]
  pose.onResults(res=>{
    if(res.poseLandmarks){
      landmarks.push(res.poseLandmarks)
    }
  })
  while(!video.ended){
    await pose.send({image:video})
    await new Promise(r=>setTimeout(r,16))
  }
  const phases=detectPhases(landmarks)
  const metrics=calculateMetrics(landmarks,phases)
  const tempo=calculateTempo(phases)
  const separation=calculateSeparation(landmarks,phases)
  const velocity=calculateVelocity(landmarks)
  const score=calculateScore(metrics,tempo,separation)
  const feedback=generateFeedback(metrics,tempo,separation)
  return{
    phases,
    metrics,
    tempo,
    separation,
    velocity,
    score,
    feedback
  }
}

export async function processVideoStream(video) {
  const pose = createPose();
  const landmarks = [];
  pose.onResults(res => {
    if (res.poseLandmarks) {
      landmarks.push(res.poseLandmarks);
    }
  });
  // Assume video is a live stream
  let running = true;
  video.onended = () => { running = false; };
  while (running) {
    await pose.send({ image: video });
    await new Promise(r => setTimeout(r, 16));
  }
  const phases = detectPhases(landmarks);
  const metrics = calculateMetrics(landmarks, phases);
  const tempo = calculateTempo(phases);
  const separation = calculateSeparation(landmarks, phases);
  const velocity = calculateVelocity(landmarks);
  const score = calculateScore(metrics, tempo, separation);
  const feedback = generateFeedback(metrics, tempo, separation);
  return {
    phases,
    metrics,
    tempo,
    separation,
    velocity,
    score,
    feedback
  };
}
