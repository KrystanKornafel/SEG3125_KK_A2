import './ApplyNow.css'

function ApplyNow() {
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

      {/* Process: Create textboxes with their corresponding box to RECEIVE text from user. */}
      {/*Then create a submit button that redirects to the FinalPgApply Page */}

      {/* Modify to create the form */}
      <div className="container mt-5">
        <div className="mb-5">
          <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
            {/* Reference for center alignment: https://mdbootstrap.com/docs/react/layout/vertical-alignment/ */}
            <div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: '#5BE5CE', width: "1200px", height: "1000px"}}>
              <div style={{ backgroundColor: '#EFEFEF', width: "1000px", height: "800px", padding: "100px" }}>
                {/* Reference for styling: https://www.pluralsight.com/resources/blog/guides/react-inline-styling */}
                <p style={{ color: '#000000', fontSize: "20px", fontWeight: 700, textAlign: "left" }}>What is your name?</p><br/>
                {/* Textbox here for input */}
                <br/><p style={{ color: '#000000', fontSize: "20px", fontWeight: 700, textAlign: "left" }}>Phone Number:</p><br/>
                {/* Textbox here for input */}
                <br/><p style={{ color: '#000000', fontSize: "20px", fontWeight: 700, textAlign: "left" }}>Email:</p><br/>
                {/* Textbox here for input */}
                <br/><p style={{ color: '#000000', fontSize: "20px", fontWeight: 700, textAlign: "left" }}>Tell us about yourself:</p><br/>
                {/* Textbox here for input */}
                {/* Reference used to redirect to another page: https://www.geeksforgeeks.org/reactjs/how-to-redirect-to-another-page-in-reactjs/ */}
                {/* Add the submit button here, that will redirect to the FinalPgApply page, (using React Link to route to the page). */}
                {/* Reference used when redirecting to another page using the submit button: https://www.geeksforgeeks.org/reactjs/how-to-redirect-to-another-page-in-reactjs/ */}
                <br/><button className="btn btn-primary">Submit</button>
              </div>
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

export default ApplyNow;
