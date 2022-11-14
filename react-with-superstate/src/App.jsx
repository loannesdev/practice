import { useSuperState } from '@superstate/react'
import { PHOTOS, TO_DO } from './superstate'

const { TO_DO_STATE, createToDo, onChangeInput } = TO_DO
const { PHOTOS_STATE, readPhotos } = PHOTOS

export default function App() {
  useSuperState(TO_DO_STATE, { target: 'now' })
  useSuperState(PHOTOS_STATE, { target: 'now' })

  return (
    <div>
      <button onClick={readPhotos}>Leer fotos</button>
      <span>{TO_DO_STATE.now().TASKS.length} tareas pendientes</span>

      <input type="text" onChange={(evt) => { onChangeInput(evt.target.value) }} value={TO_DO_STATE.now().INPUT_VALUE} />
      <button onClick={() => {
        createToDo()
      }}>Agregar tarea</button>

      {
        TO_DO_STATE?.now()?.TASKS?.length
          ? TO_DO_STATE.now().TASKS.map(elm =>
            <article key={elm.id}>
              <p>tarea: {elm.task}</p>
              <span>completada: {elm.completed}</span>
              <button >Completar</button>
              <button>Eliminar</button>
            </article>
          )
          : <h2>Agrega tareas</h2>
      }


      {
        PHOTOS_STATE?.now()?.length
          ? <>
            <h2>USUARIOS</h2>
            {
              PHOTOS_STATE.now().map(elm =>
                <article key={elm.id}>
                  <span>Nombre: {elm.name}</span><br />
                  <span>Nombre de usuario: {elm.username}</span><br />
                  <span>Correo: {elm.email}</span><br />
                  <span>Teléfono: {elm.phone}</span><br />
                  <span>Sitio web: {elm.website}</span><br /><br />
                </article>
              )}
          </>
          : null
      }
    </div>
  )
}
