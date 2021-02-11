// components/Header.js

import React, { useState } from "react";
import Link from 'next/link'



export default function Header(props) {

	const [isActive, setActive] = useState("false");

	const handleToggle = () => {
	  setActive(!isActive);
	};

return (

	<header>

		<Link href="/">
			<a id="logo" aria-label="homepage">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="M157.9,47.37l4.67-42.1H17.74L.2,163.15c-1.94,17.44,10.63,31.58,28.07,31.58h134.3c11.63,0,22.1-9.42,23.39-21L200,47.37ZM116.28,141.8H95.17V111.22H65V141.8H43.74V59.21H65V91.09H95.17V59.21h21.11Zm49.8,21.35a12.06,12.06,0,0,1-11.69,10.53A9.24,9.24,0,0,1,145,163.15l10.53-94.73h21.05Z"/></svg>Headly
			</a>
		</Link>

		<button onClick={handleToggle} className={isActive ? null : "open"} id="menu" type="button">Menu<div className="hamburger"></div></button>

		<nav className={isActive ? null : "open"}>
			<ul>
				<li><a href="#news" onClick={handleToggle}>{props.news}</a></li>
				<li><a href="#check" onClick={handleToggle}>{props.check}</a></li>
				<li><a href="#tech" onClick={handleToggle}>{props.tech}</a></li>
				<li><a href="#biz" onClick={handleToggle}>{props.biz}</a></li>
				<li><a href="#sport" onClick={handleToggle}>{props.sport}</a></li>
				<li><a href="#cult" onClick={handleToggle}>{props.cult}</a></li>
				<li><a href="#geek" onClick={handleToggle}>{props.geek}</a></li>
				<li><a href="#sci" onClick={handleToggle}>{props.sci}</a></li>
				<li><a href="#dscvr" onClick={handleToggle}>{props.dscvr}</a></li>
				{/* <li><a href="https://github.com/lucasmezs/headly/discussions" target="_blank" className="button">{props.contribute}</a></li> */}
			</ul>
		</nav>

		<div className={isActive ? "layer" : "layer layer-active"}></div>

	</header>

)}