import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import StatusBar from "./components/StatusBar.js"
import HighScoresPage from "./pages/HighScoresPage.js"
import GameDirection from "./components/GameDirection.js"
import SettingsBox from "./components/SettingsBox.js"
import HighScores from "./components/HighScores.js"
import PlayNow from "./components/PlayNow.js"
import GameComplete from "./components/GameComplete.js"
import MissedQuestions from "./components/MissedQuestions.js"

function App() {
  return (
    <BrowserRouter>
      <StatusBar />
      <Routes>
        <Route path="/" element={<GameDirection />} />
        <Route path="/settings" element={<SettingsBox />} />
        <Route path="/highScores" element={<HighScores />} />
        <Route path="/play" element={<PlayNow />} />
        <Route path="/gamecomplete" element={<GameComplete />} />
        <Route path="/missedquestions" element={<MissedQuestions />} />

        <Route path="/highScores/global" element={<HighScoresPage />} />

        {/* Set an error route */}
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
