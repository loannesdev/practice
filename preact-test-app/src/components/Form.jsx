import { effect } from '@preact/signals';
import { useState } from 'preact/hooks';
import { AuxUpdate, CreateUser, S } from "../store";

const INITIAL_STATE = {
  name: "",
  email: "",
  phone: ""
}


let stateAux = {}

export default function Form() {
  const { ON_UPDATE } = S.value
  effect(() => { Object.keys(ON_UPDATE).length ? stateAux = ON_UPDATE : null })

  const ON_UPDATE_LENGTH = Object.keys(ON_UPDATE).length
  const [state, setState] = useState(INITIAL_STATE)

  const HandleCreate = () => {
    CreateUser(state)
    setState(INITIAL_STATE)
  }

  const HandleOnChange = (obj) => {
    ON_UPDATE_LENGTH
      ? stateAux = { ...stateAux, ...obj }
      : setState({ ...state, ...obj })
  }

  return (
    <article className="rounded-md drop-shadow-md bg-blue-100 p-2 grid gap-6 col-span-1">
      <h3 className='text-lg font-bold self-center text-center'>{ON_UPDATE_LENGTH ? 'Actualiza los datos del usuario' : 'Escribe los datos nuevos del usuario'}</h3>
      <div className='w-9/12 place-self-center flex flex-col align-start'>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={(evt) => HandleOnChange({ name: evt.target.value })}
          value={stateAux.name ?? state.name}
          className='w-full px-2 py-1 outline-none outline-offset-1 focus:outline-blue-400 m-0 p-0'
        /><br />
        <input
          type="email"
          name="email"
          placeholder="Correo"
          onChange={(evt) => HandleOnChange({ email: evt.target.value })}
          value={stateAux.email ?? state.email}
          className='w-full px-2 py-1 outline-none outline-offset-1 focus:outline-blue-400'
        /><br />
        <input
          type="tel"
          name="phone"
          placeholder="Telefono"
          onChange={(evt) => HandleOnChange({ phone: evt.target.value })}
          value={stateAux.phone ?? state.phone}
          className='w-full px-2 py-1 outline-none outline-offset-1 focus:outline-blue-400'
        />

      </div>

      <button
        onClick={() => {
          if (ON_UPDATE_LENGTH) {
            AuxUpdate({ data: stateAux });
            stateAux = {}
          } else {
            HandleCreate();
          }
        }}
        className='w-9/12 bg-sky-400 self-center py-1 px-2 text-center text-white font-bold place-self-center outline-none'
      >
        {ON_UPDATE_LENGTH ? "Actualizar datos" : "Crear usuario"}
      </button>

    </article>
  )
}
