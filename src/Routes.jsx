import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Home } from "./pages/Home/Home"
import { Phrases } from "./pages/Phrases/Phrases"
import { Notes } from "./pages/Notes/Notes"
import { Tasks } from "./pages/Tasks/Tasks"
import { OpeningSentences } from "./pages/Phrases/Categories/OpeningSentences"
import { AboutLuizaCard } from "./pages/Phrases/Categories/AboutLuizaCard"
import { AboutEquipment } from "./pages/Phrases/Categories/AboutEquipment"

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phrases" element={<Phrases />} />
        <Route path="/phrases/opening" element={<OpeningSentences />} />
        <Route path="/phrases/about-luiza-card" element={<AboutLuizaCard />} />
        <Route path="/phrases/about-equipment" element={<AboutEquipment />} />
        <Route path="/my-tasks" element={<Tasks />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </Router>
  )
}