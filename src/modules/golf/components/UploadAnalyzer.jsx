import React,{useRef} from "react"
import { processVideoFile } from "../engine/FrameProcessor"

export default function UploadAnalyzer({setResults}){
  const videoRef=useRef()
  async function handleUpload(e){
    const file=e.target.files[0]
    if(!file) return
    const url=URL.createObjectURL(file)
    videoRef.current.src=url
    await videoRef.current.play()
    const results=await processVideoFile(videoRef.current)
    setResults(results)
  }
  return(
    <div>
      <h3>Upload Swing</h3>
      <input type="file" accept="video/*" onChange={handleUpload}/>
      <video ref={videoRef} controls/>
    </div>
  )
}
