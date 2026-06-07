//import ReactDOM from 'react-dom/client';
import './Hairdresser.css'
import { Link, Outlet } from 'react-router-dom';

function Home()  {
  return (
    <div className="container mt-5">
      <div className="mb-5">
        <div className="border rounded p-3 mb-4" style={{ backgroundColor: '#c473ca', border: '10px solid #215689' }}>
          <h1>Hairdresser Salon</h1>
          <div className="border rounded p-3 mb-4" style={{ backgroundColor: '#f2cdda' }}>
            <p>We will have content coming soon!</p>
          </div>
        </div>
      </div>
    </div> 
  );
}



function Navbar() {
  return (
    //Reference used for this: https://www.sitepoint.com/creating-a-navbar-in-react/
    //<nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
    // <div className="navbar-center">
    <div className="container-fluid"style={{ backgroundColor: "#F46FF0", border: "1px solid #334155" }}> 
      <div className="navbar">
        {/* Reference used for spacing (aka "me-3, me-auto"): https://mdbootstrap.com/docs/react/utilities/spacing/ */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row">
        {/* <div className="container-fluid"> */}
          {/* <span className="navbar-brand">Assign2</span> */}
          {/* <div className="navbar-nav"> */}
          {/* Add a link to the main UI page for the Portfolio */}
            <li className="nav-item me-3"><Link className="nav-link" to="/hairdresser">Home</Link></li>
            {/* <Link className="nav-link text-white" to="/about">About</Link> */}
            <li className="nav-item me-3"><Link className="nav-link" to="/hairdresser/about">About</Link></li>
            <li className="nav-item me-3"><Link className="nav-link" to="/hairdresser/applyNow">We are Hiring!</Link></li>
            <li className="nav-item me-3"><Link className="nav-link" to="/hairdresser/bookAppointment">Book Appointment</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/hairdresser/contactUs">Contact Us</Link></li>
          {/* </div> */}
        {/* </div> */}
        </ul>
      </div>
    </div>
  );
}


//The next 6 functions are for the hair salon page
function About() { 
  return <div className="container mt-4"><h1>About us</h1></div>; 
}
function ApplyNow() { 
  return <h2>Apply Now Page</h2>; 
}
function BookAppointment() { 
  return <h2>Book Appointment Page</h2>; 
}
function ContactUs() { 
  return <h2>Contact Us Page</h2>; 
}


function Hairdresser() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Hairdresser;

export { Home, About, ApplyNow, BookAppointment, ContactUs };
