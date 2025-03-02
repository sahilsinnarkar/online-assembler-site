import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import LearnPage from "./components/LearnPage"
import ContributePage from "./components/ContributePage"
import TryItYourself from "./components/TryItYourself"
function App() {

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<LearnPage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/contribute" element={<ContributePage />} />
        <Route path="/try-it-yourself" element={<TryItYourself />} />
      </Routes>
    </Router>
  )
}

export default App
