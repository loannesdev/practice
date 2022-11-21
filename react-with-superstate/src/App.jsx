import { useSuperState } from '@superstate/react'
import { PHOTOS } from './superstate/Photos'
import { TO_DO } from './superstate/ToDo'

const { createToDo, onChangeInput, deleteTask, completeTask } = TO_DO
const { readPhotos } = PHOTOS

export default function App() {
  useSuperState(TO_DO.state, { target: 'now' })
  useSuperState(PHOTOS.state, { target: 'now' })
  const TODO_S = TO_DO.state.now();
  const PHOTOS_S = PHOTOS.state.now();

  return (
    <>
      <button onClick={readPhotos}>Leer fotos</button>
      <span>{TODO_S.TASKS.length} tareas pendientes</span>

      <input type="text" onChange={(evt) => { onChangeInput(evt.target.value) }} value={TODO_S.INPUT_VALUE} />
      <button onClick={() => {
        createToDo()
      }}>Agregar tarea</button>

      {
        TODO_S?.TASKS?.length
          ? TODO_S.TASKS.map(elm =>
            <article key={elm.id}>
              <p>tarea: {elm.task}</p>
              <span>completada: {elm.completed ? "Si" : "No"}</span><br />
              {elm.completed ? null : <button onClick={() => completeTask(elm.id)}>Completar</button>}
              <button onClick={() => deleteTask(elm.id)}>Eliminar</button>
              <br /><br />
            </article>
          )
          : <h2>Agrega tareas</h2>
      }


      {
        PHOTOS_S?.length
          ? <>
            <h2>USUARIOS</h2>
            {
              PHOTOS_S.map(elm =>
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
    </>
  )
}
