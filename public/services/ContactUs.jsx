import './ContactUs.css'
import { Link } from 'react-router-dom';

function ContactUs() {
  return (
     //Reference used for background colour: https://www.w3schools.com/cssref/pr_background-color.php
    <div style={{ backgroundColor: '#c473ca' }}>
      {/* First section of the ContactUs page */}
      <div className="container mt-5">
        <div className="mb-5">
          {/* <div className="border rounded p-3 mb-4" style={{ backgroundColor: '#c473ca', border: '10px solid #215689' }}> */}
            <div>
              <img src="/Logo.png" className="float-start me-3 rounded" style={{ width: "175px" }} alt="logo" />
              <div style={{ backgroundColor: '#4FE5F5'}}><br/><h1>Chique Hairstylez</h1><br/></div>
            </div>  
            {/* <div className="border rounded p-3 mb-4" style={{ backgroundColor: '#f2cdda' }}>
              <p>We will have content coming soon!</p>
            </div> */}
          </div>
        {/* </div> */}
      </div> 


      {/* Third section of the ContactUspage */}
       {/* Reference for center alignment: https://mdbootstrap.com/docs/react/layout/vertical-alignment/ */}
      <div className="container mt-5  d-flex justify-content-center align-items-center">
        <div style={{ display: "flex", gap: "2px"}}>
          <div>
            <Link to="/hairdresser/ServicesPage"><img src="/Services2_Img.png" className="float-left ms-3 rounded" style={{ width: "300px", height:"300px" }} alt="logo" /></Link>
            {/* <img src="/Services2_Img.png" className="float-left ms-3 rounded" style={{ width: "300px", height:"300px" }} alt="logo" /> */}
          </div>
          <div style={{ backgroundColor: '#4FE5F5', width: "400px", height: "300px"}}><br/>
              <p style={{ color: '#8F0CB0', fontSize: "20px", fontWeight: 700}}><br/>Contact Us<br/><br/>(613)-890-1234<br/>ChiqueHairstylez@gmail.com<br/><br/></p>
          </div>
        </div>
      </div>

      {/* Third section of the page: the footer */}
      <div className="container mt-5">
        <div className="mb-5">
            <div>
              <div style={{ backgroundColor: '#F46FF0'}}><br/>
                <p style={{ color: '#000000', fontSize: "20px", fontWeight: 700 }}><br/>Designed by: Krystan Kornafel, a third year Software Engineering student.<br/></p>
                <p style={{ color: '#690AE4', fontSize: "20px", fontWeight: 700 }}><br/>(613)-890-1234, ChiqueHairstylez@gmail.com<br/></p><br/><br/>
              </div>
            </div>  
          </div>
      </div>

    </div>
  );
}

export default ContactUs;
