import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { useContext } from 'react';

import AdminHome from './views/admin/adminHome';
import Create from './views/admin/create';
import Update from './views/admin/update';
import ListeCommands from './views/admin/listeCommands';

import Login from './views/auth/loginPage';

import KithenHome from './views/kitchen/home';

import Home from './views/client/HomePage';

import { StoreProvider } from './Providers/Store';
import { StoreContext } from './Providers/Store';

function App() {
  return (
    <div className="App pl-12 pr-12 bg-sky-100 min-h-screen">
      <StoreProvider>
        <BrowserRouter>
          <Routes>
            
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/admin/create" element={<Create />} />
            <Route path="/admin/listeCommandes" element={<ListeCommands />} />
            <Route path="/admin/categorie/:id" element={<Update />} />
            <Route path="/admin/ingredient/:id" element={<Update />} />
            <Route path="/admin/article/:id" element={<Update />} />

            <Route path="/auth" element={<Login />} />

            <Route path="/kitchen" element={<KithenHome />} />

            <Route path="/" element={<Home />} />

          </Routes>
        </BrowserRouter>
      </StoreProvider>
    </div>
  )
}

export default App;
