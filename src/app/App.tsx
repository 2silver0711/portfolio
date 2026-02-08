import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';

export default function App() {
  return (
    <Router>
      <div className="size-full">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}