import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SplashScreen from "./pages/SplashScreen";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<SplashScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
