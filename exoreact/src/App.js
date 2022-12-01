import './App.css';
import Home from './Views/Home'
import CreateMovie from './Views/CreateMovie'
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import { StoreProvider } from './Store/Store';

function App() {
  return (
    <div className="App" class="bg-slate-900 min-h-screen">
      <StoreProvider>
          <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/create" element={<CreateMovie />}></Route>
            </Routes>
          </BrowserRouter>
      </StoreProvider>
    </div>
  );
}

export default App;
