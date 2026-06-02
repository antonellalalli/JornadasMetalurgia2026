import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inscription from "./components/Inscription";
import History from "./pages/History";

import Certificates from "./pages/Certificates"
import Gallery from "./pages/Gallery";
import AdminPanel from "./pages/AdminPanel";
import AdminPopUp from "./components/AdminPopUp";
import PageLoader from "./components/PageLoader";
import { Suspense, useEffect } from "react";
import { useAuthStore } from "./store/useAuthStore";
import Information from "./pages/Information";
function App() {
  const checkLoginStatus = useAuthStore((state)=> state.checkLoginStatus);

  useEffect(()=>{
    checkLoginStatus();
  }, [checkLoginStatus])
  return (
    <>
      <Router>
        <AdminPopUp/>

        <Suspense fallback={<PageLoader/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Inscription" element={<Inscription />} />
          <Route path="/History" element={<History />} />
          <Route path="/Information" element={<Information/>}></Route>
          <Route path="/Certificates" element={<Certificates/>}></Route>
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Admin" element={<AdminPanel />} />
        </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
