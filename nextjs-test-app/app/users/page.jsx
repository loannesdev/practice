import { Fragment } from 'react';
import api from '../../utils/api.json';
import styles from './styles.module.css';

const getUsers = async () => {
  return fetch(`${api.url}${api.users}`)
    .then((res) => res.json());
};

export default async function page() {
  const USERS = await getUsers();

  return (
    <>
      {
        USERS.map((element) => {
          return (
            <article key={element.id} className={styles.container}>
              <h3>{element.name}</h3>
              {
                Object
                  .entries(element)
                  .filter((v) => v[0] !== 'id' && v[0] !== 'name')
                  .map((value, index, arr) => (
                    <Fragment key={index}>
                      <span><b>{value[0]}: </b></span>

                      {
                        typeof value[1] === 'object'
                          ? Object
                            .entries(value[1])
                            .map((elm, index) => (
                              <Fragment key={index}>
                                <dd>
                                  ({elm[0]})
                                  {' '}
                                  {
                                    typeof elm[1] === 'object'
                                      ? Object
                                        .entries(elm[1])
                                        .map((e, index, array) => `${e[0]}: ${e[1]} ${index === array.length - 1 ? '' : ' | '}`)
                                      : elm[1]
                                  }
                                </dd>
                              </Fragment>
                            ))
                          : (
                            <>
                              <span>{value[1]}</span>
                              {index === arr.length - 1 ? null : <br />}
                            </>
                          )
                      }
                    </Fragment>
                  ))
              }
            </article>
          );
        }
        )
      }
    </>
  );
}
