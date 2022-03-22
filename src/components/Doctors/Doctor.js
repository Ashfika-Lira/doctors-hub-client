import React from 'react';
import { Button } from 'react-bootstrap';

	 const Doctor = (props) => {
		const { img, name, title } = props.doctor;
	return (
			  <div className="col doctor">
				 <div className="d-lg-flex align-items-center ms-5 my-5">
					<div className="mb-2">
					   <img height="200px" width="200px" className="rounded-circle" src={img} alt="" />
					</div>
					<div className="ms-4">
					   <h4 className="doctor-name">Name: {name}</h4>
					   <p><strong>Title</strong>: {title}</p>
					</div>
				 </div>
		</div>
	);
};

export default Doctor;