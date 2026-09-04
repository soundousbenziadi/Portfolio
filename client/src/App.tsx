import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SplashScreen from "./pages/SplashScreen";
import MainLayout from "./components/layout/MainLayout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route element={<MainLayout />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
