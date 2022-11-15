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
import { LeadingPhrases } from "./pages/Phrases/Categories/LeadingPhrases"
import { ClosingSentences } from "./pages/Phrases/Categories/ClosingSentences"

export function AppRoutes() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phrases" element={<Phrases />} />
        <Route path="/phrases/opening" element={<OpeningSentences />} />
        <Route path="/phrases/leading-phrases" element={<LeadingPhrases />} />
        <Route path="/phrases/closing" element={<ClosingSentences />} />
        <Route path="/my-tasks" element={<Tasks />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </Router>
  )
}