// components/VerticalNav.js

import styles from '../styles/Vertical.module.css';

  const VerticalNav = () => (

    <div>
        <div className={styles.verticalNav}>
          <ul>
            <li><a href="#news" class="active"><span className={styles.label}>News</span></a></li>
            <li><a href="#check"><span className={styles.label}>Check</span></a></li>
            <li><a href="#tech"><span className={styles.label}>Tech</span></a></li>
            <li><a href="#biz"><span className={styles.label}>Biz</span></a></li>
            <li><a href="#sport"><span className={styles.label}>Sport</span></a></li>
            <li><a href="#cult"><span className={styles.label}>Cult</span></a></li>
            <li><a href="#geek"><span className={styles.label}>Geek</span></a></li>
            <li><a href="#sci"><span className={styles.label}>Sci</span></a></li>
            <li><a href="#dscvr"><span className={styles.label}>Dscvr</span></a></li>
          </ul>
        </div>

        <button className={styles.navButton}>Open navigation<span></span></button>

      </div>
  );
  
  export default VerticalNav;