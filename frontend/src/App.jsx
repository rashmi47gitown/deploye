import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WhatsAppChat from "./components/WhatsappChat";
import SendImage from "./components/SendImage";
import SendPdf from "./components/SendPdf";
import VisitorRequest from "./components/VisitorRequest";
import VisitorApproved from "./components/VisitorApproved";
import VisitorRejected from "./components/VisitorRejected";
import VisitorIn from "./components/VisitorIn";
import VisitorOut from "./components/VisitorOut";
import LandingPage from "./components/LandingPage";
import Menu from "./components/Menu";
function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/message" element={<WhatsAppChat />} />
        <Route path="/image" element={<SendImage />} />
        <Route path="/pdf" element={<SendPdf />} />
        <Route exact path="/visitorrequest" element={<VisitorRequest />} />
        <Route exact path="/visitorapproved" element={<VisitorApproved />} />
        <Route exact path="/visitorrejected" element={<VisitorRejected />} />
        <Route exact path="/visitor_in" element={<VisitorIn />} />
        <Route exact path="/visitor_out" element={<VisitorOut />} />
      </Routes>
    </div>
  );
}
export default App;
