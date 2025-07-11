import { Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './components/Login';
import GestionUsuarios from './components/GestionUsuarios';
import GestionDonaciones from './components/GestionDonaciones';
import GestionDonadores from './components/GestionDonadores';
import Registro from './components/Registro';
import GestionDistribuciones from './components/GestionDistribuciones';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/gestion-usuarios" element={<GestionUsuarios />} />
      <Route path='/gestion-donaciones' element={<GestionDonaciones/>}/>
      <Route path='/gestion-donadores' element={<GestionDonadores/>}/>
      <Route path='/registro' element={<Registro/>}/>
      <Route path="/gestion-distribuciones" element={<GestionDistribuciones />} />
    </Routes>
  );
}