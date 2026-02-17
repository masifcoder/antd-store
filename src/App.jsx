import './App.css'
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from "./pages/LoginPage";
import NotfoundPage from "./pages/NotfoundPage";
import Dashboard from './pages/Dashboard';
import ProductsPage from "./pages/ProductsPage";
import CreateProductPage from "./pages/CreateProductPage";
import DashboardHome from './pages/DashboardHome';
import SecureRoute from './components/SecureRoute';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={ <SecureRoute> <Dashboard /> </SecureRoute>  } >
            <Route index element={<DashboardHome />} />
            <Route path='products' element={<ProductsPage />} />
            <Route path='create' element={<CreateProductPage />} />
        </Route>
        <Route path='*' element={<NotfoundPage />} />
      </Routes>
    </>
  )
}

export default App
