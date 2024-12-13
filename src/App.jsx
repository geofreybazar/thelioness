import { Routes, Route, useNavigate } from "react-router";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LandingPage from "./pages/LandingPage";
import Stake from "./pages/Stake";
import NavBar from "./components/Universalcomponent/NavBar.jsx";
import Footer from "./components/Universalcomponent/Footer.jsx";
import AppWalletProvider from "./components/AppWalletProvider.jsx";


const queryClient = new QueryClient();

function App() {

  const navigate = useNavigate();
  const handleStakeNow = () => {
    navigate('/stake')
  };

  return (
    <QueryClientProvider client={queryClient}>
      <AppWalletProvider>
        <NavBar handleStakeNow={handleStakeNow}/>
          <Routes>
            <Route path='/' 
              element={<LandingPage handleStakeNow={handleStakeNow}/>}
            />
            <Route path='/stake' 
              element={<Stake/>}
            />
          </Routes>
        <Footer/>      
       </AppWalletProvider>
    </QueryClientProvider>
  )
}

export default App
