// components/Footer.js

import Link from 'next/link'
import SelectLocale from './SelectLocale'

  const Footer = (props) => (

    <footer>

      <div className="container">

        <div>
          <Link href="/">
            <a aria-label="homepage">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path className="svg" d="M157.9,47.37l4.67-42.1H17.74L.2,163.15c-1.94,17.44,10.63,31.58,28.07,31.58h134.3c11.63,0,22.1-9.42,23.39-21L200,47.37ZM116.28,141.8H95.17V111.22H65V141.8H43.74V59.21H65V91.09H95.17V59.21h21.11Zm49.8,21.35a12.06,12.06,0,0,1-11.69,10.53A9.24,9.24,0,0,1,145,163.15l10.53-94.73h21.05Z"/></svg></a>
          </Link>
        </div>

        <p>{props.title}</p><br/>

        <SelectLocale edition={props.edition}/>

        <p>{props.legal}</p><br/>

        <ul>
          <li><a href="https://github.com/lucasmezs/headly" target="_blank">{props.about}</a></li>
          <li><a href="https://lucasm.dev/privacy" target="_blank" rel="noopener">{props.privacy}</a></li>
          <li><a href="mailto:feedback@headly.app">{props.feedback}</a></li>
        </ul>

      </div>
		
    </footer>

  );
  
  export default Footer;