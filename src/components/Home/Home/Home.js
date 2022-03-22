import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import FAQ from '../FAQ/FAQ';
import Subscribe from '../Subscribe/Subscribe';
import Departments from '../Departments/Departments';
import Pagination from '../Pagination/Pagination';
// import Review from '../Review/Review';


const Home = () => {
	return (
		<div id="home">
			<Banner></Banner>
            <About></About>
			<Departments></Departments>
			{/* <Review></Review> */}
			<Subscribe></Subscribe>
			<Contacts></Contacts>
			<FAQ></FAQ>
			<Pagination></Pagination>
		</div>
	);
};

export default Home;