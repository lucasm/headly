// components/VerticalNav.js

import styles from '../styles/VerticalNav.module.css';

export default function VerticalNav(props) {

  return (

    <div>
        <div className={styles.verticalNav}>
          <ul>
            <li><a href="#news" class="active"><span className={styles.label}>{props.news}</span></a></li>
            <li><a href="#check"><span className={styles.label}>{props.check}</span></a></li>
            <li><a href="#tech"><span className={styles.label}>{props.tech}</span></a></li>
            <li><a href="#biz"><span className={styles.label}>{props.biz}</span></a></li>
            <li><a href="#sport"><span className={styles.label}>{props.sport}</span></a></li>
            <li><a href="#cult"><span className={styles.label}>{props.cult}</span></a></li>
            <li><a href="#geek"><span className={styles.label}>{props.geek}</span></a></li>
            <li><a href="#sci"><span className={styles.label}>{props.sci}</span></a></li>
            <li><a href="#dscvr"><span className={styles.label}>{props.dscvr}</span></a></li>
          </ul>
        </div>

        <button className={styles.navButton}>Open navigation<span></span></button>

      </div>
  )

}