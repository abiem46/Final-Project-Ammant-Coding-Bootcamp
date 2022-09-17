import "./App.css";
import Navbar from "./components/Layout/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import Registration from "./pages/Registration/Registration";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Course from "./pages/Course/Course";
import ListTutorSD from "./pages/Course/ListTutorSD";
import ListTutorSMP from "./pages/Course/ListTutorSMP";
import ListTutorSMA from "./pages/Course/ListTutorSMA";
// import About from "./pages/About/About";
import MyCourse from "./pages/MyCourse/MyCourse";
import Payment from "./pages/Payment/Payment";
import TutorCourse from "./pages/TutorCourse/TutorCourse";
import Team from "./components/Team/Team";
import Notification from "./components/Notifcation/Notification";
import NavbarTwo from "./components/Layout/NavbarTwo";
import Footer from "./components/Layout/Footer";
// import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <NavbarTwo /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/course" element={<Course />} />
        {/* <Route path="/About" element={<About />} /> */}
        <Route path="/Team" element={<Team />} />
        <Route path="/course/listTutorSD" element={<ListTutorSD />} />
        <Route path="/course/listTutorSMP" element={<ListTutorSMP />} />
        <Route path="/course/listTutorSMA" element={<ListTutorSMA />} />
        <Route path="/myCourse" element={<MyCourse />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/notif" element={<Notification />} />
        <Route path="/tutorCourse" element={<TutorCourse />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/blog" element={<Blog />} /> */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
