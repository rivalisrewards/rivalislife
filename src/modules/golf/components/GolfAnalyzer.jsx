import React,{useState} from "react"
import UploadAnalyzer from "./UploadAnalyzer"
import CameraAnalyzer from "./CameraAnalyzer"
import ResultsPanel from "./ResultsPanel"

export default function GolfAnalyzer(){
  const [results,setResults]=useState(null)
  return(
    <div className="golf-container">
      <div className="golf-controls">
        <UploadAnalyzer setResults={setResults}/>
        <CameraAnalyzer setResults={setResults}/>
      </div>
      <ResultsPanel results={results}/>
    </div>
  )
}
