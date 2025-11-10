import { Link } from 'react-router-dom';
import styles from './CommonNav.module.scss';
import { useState, useEffect } from 'react';

interface NavItem {
  index: number;
  path: string;
  label: string;
}

function CommonNav() {
  const [menuList, setMenuList] = useState<NavItem[]>([]);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/nav/')
      .then(response => response.json())
      .then(data => {
        setMenuList(data); 
      })
      .catch(error => console.error("Error fetching nav data:", error));
  }, []); 
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation__menu}>
        {menuList.map((menu, index) => (
          <li key={index}>
            <Link className={styles.navigation_link} to={menu.path}>{menu.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default CommonNav;
