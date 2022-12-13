import Link from 'next/link';
import api from '../../utils/api.json';
import styles from './styles.module.css';

const getPhotos = async () => {
  return fetch(`${api.url}${api.albums}`)
    .then((res) => res.json());
};

export default async function page() {
  const PHOTOS = await getPhotos();

  return (
    <>
      {
        PHOTOS.map((elm) => {
          return (
            <article key={elm.id} className={styles.card}>
              <Link href={`/albums/${elm.id}`}>
                <h1>{elm.id}.{' '}{elm.title}</h1>
              </Link>
            </article>
          );
        })
      }
    </>
  );
}
