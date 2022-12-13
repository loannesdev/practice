import Link from 'next/link';
import styles from './styles.module.css';

const LINKS = [
  {
    text: 'Home',
    route: '/'
  },
  {
    text: 'Posts',
    route: '/posts'
  },
  {
    text: 'Albums',
    route: '/albums'
  },
  {
    text: 'Users',
    route: '/users'
  }
];

export default function Navbar() {
  return (
    <>
      <ul className={styles.navbar}>
        {
          LINKS.map(({ text, route }, index) => {
            return (
              <li key={index}>
                <Link href={route}>
                  {text}
                </Link>
              </li>
            );
          })
        }
      </ul>
    </>
  );
}
