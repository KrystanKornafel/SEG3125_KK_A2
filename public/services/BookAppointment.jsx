import './BookAppointment.css'

function BookAppointment() {
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
