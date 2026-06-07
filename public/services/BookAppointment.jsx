import './BookAppointment.css'
import { useNavigate } from 'react-router-dom';


//======================== Book Appointment Page ====================================================================================
// Name: Krystan Kornafel
// Assignment: SEG3125 Assignment 2
// Description: This React UI will be used to generate a form that will allow users to book an appointment at the hair salon.
//They are to select a time and date, a service, and enter in their contact details so that a specialist can contact them to 
//confirm the appointment. Once the form is submitted (indicated by the user click in the submit button), the user will then 
//be redirected to another page (FinalPgAppointment.jsx) which will indicate to the user that their appointment request has
//been received successfully, and that someone will contact them soon to confirm the appointment. 



function BookAppointment() {
  // Reference used for the navigation function: https://www.geeksforgeeks.org/reactjs/reactjs-usenavigate-hook/
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: '#c473ca' }}>
      {/* First section of the ApplyNow page */}
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

      {/* Process: Create textboxes with their corresponding box to RECEIVE text from user.*/} 
      {/* Create an input for the selection of the service type */}
      {/* Create an input for the selection of the date and time */}
      {/* Then create a submit button that redirects to the FinalPgAppointment Page */}

      {/* Modify to create the form */}
      <div className="container mt-5">
        <div className="mb-5">
          <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
            <div style={{ backgroundColor: '#5BE5CE', width: "1200px", height: "700px"}}><br/>
              {/* Reference for styling: https://www.pluralsight.com/resources/blog/guides/react-inline-styling */}
              <p style={{ color: '#8F0CB0', fontSize: "20px", fontWeight: 700 }}><br/>Book Appointment!</p><br/>
              {/* Reference used to redirect to another page: https://www.geeksforgeeks.org/reactjs/how-to-redirect-to-another-page-in-reactjs/ */}
                {/* Add the submit button here, that will redirect to the FinalPgAppointment page, (using React Link to route to the page). */}
                {/* Reference used when redirecting to another page using the submit button: https://www.geeksforgeeks.org/reactjs/how-to-redirect-to-another-page-in-reactjs/ */}
                {/* Additional reference for re-routing to another page: https://reactrouter.com/en/main/hooks/use-navigate */}
                <br/><button className="btn btn-primary" onClick={() => navigate('/FinalPgAppointment', { replace: true })}>Submit</button>
            </div>
          </div>
        </div>
      </div>

      

      {/* Third section of the ApplyNow page, the footer */}
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

export default BookAppointment;
