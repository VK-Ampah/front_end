import './App.css';
import Header from './components/shared/Header';
import Home from './components/pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profiles from './components/pages/Profiles';
import SearchComponent from './components/pages/SearchComponent';
import Footer from './components/shared/Footer';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/search" element={<SearchComponent />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
