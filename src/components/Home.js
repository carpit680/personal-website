/** @format */

import "../css/Home.css";
import Navbar from "./Navbar";

function Home() {
	return (
		<div>
			<Navbar />
			<div className='Home' id='main'>
				<h1 className='name'>Arpit Chauhan</h1>
				{/* <img src={process.env.PUBLIC_URL + '/images/Arpit.jpg'} alt='Arpit Chauhan' /> */}
			</div>
		</div>
	);
}

export default Home;
