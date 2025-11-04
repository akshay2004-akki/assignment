import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PlayerBar from "./components/PlayerBar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetails from "./pages/EventsDetails";
import RecordDetails from "./pages/RecordDetail";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="font-sans bg-black min-h-screen overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/record/:id" element={<RecordDetails />} />
          <Route path="/about" element = {<About/>}/>
        </Routes>
        <PlayerBar />
      </div>
    </Router>
  );
}

export default App;
