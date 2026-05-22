import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inscription from "./components/Inscription";
import History from "./pages/History";

import Certificates from "./pages/Certificates"
import Gallery from "./pages/Gallery";
import AdminPanel from "./pages/AdminPanel";
import AdminPopUp from "./components/AdminPopUp";
function App() {
  return (
    <>
      <Router>
        <AdminPopUp/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Inscription" element={<Inscription />} />
          <Route path="/Historia" element={<History />} />
          <Route path="/Certificates" element={<Certificates/>}></Route>
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Admin" element={<AdminPanel />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
