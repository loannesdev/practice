import { DeleteUser, S, UpdateUser } from '../store';

export default function List() {
  const { ON_UPDATE, USERS, } = S.value

  return (
    <section className="drop-shadow-md rounded-md col-span-2 max-sm:col-span-1 grid w-full overflow-y-auto gap-3 auto-rows-min">
      {
        USERS.length
          ? USERS.map(elm => (
            <article className='bg-blue-50 rounded-sm p-2 flex items-center justify-between w-full gap-2 max-sm:flex-wrap'>
              <div className='break-all'>
                <span><b>Nombre: </b> {elm.name}</span><br />
                <span><b>Correo: </b>{elm.email}</span><br />
                <span><b>Telefono: </b>{elm.phone}</span><br />
              </div>

              <div className='flex gap-2 max-sm:justify-center max-sm:w-full'>
                {
                  Object.keys(ON_UPDATE).length
                    ? null
                    : <>
                      <button
                        onClick={() => UpdateUser(elm.id)}
                        className='bg-orange-500 text-white font-semibold px-3 py-1'
                      >Editar</button>
                      <button
                        onClick={() => DeleteUser(elm.id)}
                        className='bg-red-500 text-white font-semibold px-3 py-1'
                      >Eliminar</button>
                    </>
                }
              </div>
            </article>
          ))
          : <h3 className='self-center place-self-center'>Agrega usuarios!</h3>
      }
    </section>
  )
}