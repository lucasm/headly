// components/VerticalNav.js

import styles from '../styles/Vertical.module.css';

  const VerticalNav = () => (

    <div>
        <div className={styles.verticalNav}>
          <ul>
            <li><a href="#news" class="active"><span className={styles.label}>News</span></a></li>
            <li><a href="#checking"><span className={styles.label}>Checking</span></a></li>
            <li><a href="#tech"><span className={styles.label}>Tech</span></a></li>
            <li><a href="#business"><span className={styles.label}>Business</span></a></li>
            <li><a href="#sports"><span className={styles.label}>Sports</span></a></li>
            <li><a href="#culture"><span className={styles.label}>Culture</span></a></li>
            <li><a href="#gaming"><span className={styles.label}>Gaming</span></a></li>
            <li><a href="#science"><span className={styles.label}>Science</span></a></li>
            <li><a href="#explore"><span className={styles.label}>Discover</span></a></li>
          </ul>
        </div>

        <button className={styles.navButton}>Open navigation<span></span></button>

      </div>
  );
  
  export default VerticalNav;