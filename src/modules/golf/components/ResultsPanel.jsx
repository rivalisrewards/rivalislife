import React from "react"

export default function ResultsPanel({results}){
  if(!results) return null
  return(
    <div className="results-box">
      <h3>Swing Analysis</h3>
      <pre>{JSON.stringify(results,null,2)}</pre>
    </div>
  )
}
