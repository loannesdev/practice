import Image from 'next/image';
import api from '../../../utils/api.json';
import styles from './styles.module.css';

const getAlbum = async (id) => {
  return fetch(`${api.url}${api.photos}?albumId=${id}`)
    .then((res) => res.json());
};

export default async function page({ params }) {
  const { id } = params;

  const ALBUM = await getAlbum(id);
  return (
    <div className={styles.container}>
      <small className={styles.subtitle}>Album N° {id}</small>

      <section className={styles.container}>
        {
          ALBUM.map((elm) => {
            return (
              <article key={elm.id} className={styles.card}>
                <h3>{elm.title}</h3>
                <Image
                  src={`https://avatars.dicebear.com/api/micah/${elm.title}.svg`}
                  alt={`Imagen => ${elm.title}`}
                  width='200'
                  height='200'
                />
              </article>
            );
          })
        }
      </section>
    </div>
  );
}
