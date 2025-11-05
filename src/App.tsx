import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import IntroductionPage from './pages/IntroductionPage';
import TheoryPage from './pages/TheoryPage';
import ChangesPage from './pages/ChangesPage';
import DirectionPage from './pages/DirectionPage';
import GamesPage from './pages/GamesPage';
import SourcesPage from './pages/SourcesPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<IntroductionPage />} />
          <Route path="/theory" element={<TheoryPage />} />
          <Route path="/changes" element={<ChangesPage />} />
          <Route path="/direction" element={<DirectionPage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/sources" element={<SourcesPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App


