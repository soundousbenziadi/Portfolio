import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SplashScreen from "./pages/SplashScreen";
import MainLayout from "./components/layout/MainLayout";
import { ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";
import ProjectPage from "./pages/ProjectPage";
function App() {
  const { i18n } = useTranslation();
  return (
    <>
      <BrowserRouter>
        <div className="transition-all duration-500">
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/projects/:id" element={<ProjectPage />} />
            <Route element={<MainLayout />}>
              <Route path="/home" element={<Home />} />
            </Route>
          </Routes>
          <ToastContainer
            position={i18n.language === "ar" ? "top-left" : "top-right"}
            autoClose={3000}
            rtl={i18n.language === "ar"}
          />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
