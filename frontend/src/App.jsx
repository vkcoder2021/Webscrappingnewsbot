import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import WikiContent from './components/WikiContent';
import WikiHeadlines from './components/WikiHeadlines';

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/">Dashboard</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/headlines">WikiHeadlines</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/headlines" element={<WikiHeadlines />} />
        <Route path="/headlineContent" element={<WikiContent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
