import Link from 'next/link';
import api from '../../utils/api.json';
import styles from './styles.module.css';

const getPosts = async () => {
  return fetch(`${api.url}${api.posts}`)
    .then((res) => res.json());
};

export default async function page() {
  const POSTS = await getPosts();

  return (
    <>
      {
        POSTS.map((elm) => {
          return (
            <Link href={`posts/${elm.id}`} key={elm.id} className={styles.card}>
              <h2 className={styles.title}>{elm.title}</h2>
              <p className={styles.para}>{elm.body}</p>
            </Link>
          );
        })
      }
    </>
  );
}
