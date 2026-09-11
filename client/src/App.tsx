import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SplashScreen from "./pages/SplashScreen";
import MainLayout from "./components/layout/MainLayout";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="transition-all duration-500">
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route element={<MainLayout />}>
              <Route path="/home" element={<Home />} />
            </Route>
          </Routes>
          <ToastContainer position="top-right" autoClose={3000} />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
