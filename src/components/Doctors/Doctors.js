import React, { useEffect, useState } from 'react';
import Doctor from './Doctor';

const Doctors = () => {
	const [doctors, setDoctors] = useState([]);
   
     useEffect(() => {
      fetch('./doctors.JSON')
         .then(res => res.json())
         .then(data => setDoctors(data));
   }, [])
   return (
      <div>
         <h1 className="heading py-2 text-light bg-black ps-4 text-center">Highly Qualified Doctors</h1>
		 <h5 className="text-center">We have the best doctor team who are mostly is at your service on your need</h5>
         <div className="row row-cols-lg-2 row-cols-1 g-2 mb-3 ms-3 me-3">
            {
               doctors.map(doctor => <Doctor doctor={doctor}></Doctor>)
            }
         </div>
		</div>
	);
};

export default Doctors;