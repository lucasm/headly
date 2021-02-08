// components/Header.js

import Link from 'next/link'

if (typeof (document) !== "undefined") {
	
	// script rendered DOM

	const 	body = document.querySelector("body"),
			nav = document.querySelector("nav"),
			menuBtn = document.getElementById("menu");

	// nav menu button
	menuBtn.addEventListener("click", function() {

		this.classList.toggle("open");
		nav.classList.toggle("open");
		document.querySelector(".layer").classList.toggle("layer-active");
		body.classList.toggle("remove-scrollbar");

		document.querySelectorAll('nav > ul > li > a').forEach(item => {
			item.addEventListener('click', event => {
			menuBtn.click();
			})
		});

	});
}

const Header = () => (

	<header>
		<div class="container">

		<Link href="/"><a id="logo" aria-label="homepage">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="M157.9,47.37l4.67-42.1H17.74L.2,163.15c-1.94,17.44,10.63,31.58,28.07,31.58h134.3c11.63,0,22.1-9.42,23.39-21L200,47.37ZM116.28,141.8H95.17V111.22H65V141.8H43.74V59.21H65V91.09H95.17V59.21h21.11Zm49.8,21.35a12.06,12.06,0,0,1-11.69,10.53A9.24,9.24,0,0,1,145,163.15l10.53-94.73h21.05Z"/></svg>Headlyne
		</a></Link>

		<button id="menu" type="button">Menu<div class="hamburger"></div></button>
		<nav>
			<ul>
				<li><a href="https://github.com/lucasmezs/headlyne" target="_blank">About Headlyne</a></li>
				<li><Link href="#"><a>Contribute</a></Link></li>
			</ul>
		</nav>
		<div class="layer"></div>

		</div>
	</header>

);
  
export default Header;