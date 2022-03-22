import React from 'react';
import about from '../../../images/about.jpg'

const About = () => {
	return (
		<div>
			<h2 className="heading py-2 text-dark ps-4 text-center bg-secondary text-white">About Us</h2>
         <div className='row row-cols-lg-2 row-cols-1 m-5'>
		 <div className="col-lg-5 col-md-7 col-sm-12">
               <img className="img-fluid" src={about} alt="" />
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12">
               <p className="fs-5">To ensure that you receive proper treatment, your doctor will need to keep a file. This is also a statutory obligation of every healthcare provider. Personal information on all patients who are treated in the LUMC are recorded in a local Electronic Patient Record (EPR). This record contains information on your health, examinations and treatments that you have undergone and information that your doctor has requested with your consent (for example, from your GP or from a specialist in another hospital). The LUMC has rules as to how this information is used.</p>
               <h3>Our Role</h3>
               <ul>
                  <li>List of chronic health conditions.</li>
                  <li>Hospital and emergency department reports.</li>
                  <li>Interpreting x-rays and diagnostic tests</li>
                  <li>Radiology and imaging results.</li>
                  <li>Advance care planning documents.</li>
               </ul>
            </div>
         </div>
		</div>
	);
};

export default About;