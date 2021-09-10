/** @format */

import "../css/Navbar.css";

function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
	document.body.style.backgroundColor = "white";
}

function Navbar() {
	return (
		<div className='Navbar'>
			<div id='mySidenav' className='sidenav'>
				<a href='javascript:void(0)' className='closebtn' onclick='closeNav()'>
					&times;
				</a>
				<a href='#'>About</a>
				<a href='#'>Services</a>
				<a href='#'>Clients</a>
				<a href='#'>Contact</a>
			</div>

			<div id='main'>
				<span onclick='openNav()'>&#9776; Home</span>
			</div>
		</div>
	);
}

export default Navbar;
