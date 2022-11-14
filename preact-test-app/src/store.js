import { signal } from "@preact/signals-core";

const STATE = signal({
  USERS: [],
  ON_UPDATE: {}
});

export const S = STATE;

function Handler(value) {
  STATE.value = { ...STATE.value, ...value }
}

export function CreateUser(data) {
  const X = STATE.value.USERS

  Handler({
    USERS: [
      ...X,
      { id: X.length ? X.pop().id + 1 : 1, ...data }
    ]
  })
}

export function UpdateUser(id) {
  const USER = Object.values(STATE.value.USERS).filter(elm => elm.id === id)
  Handler({ ON_UPDATE: USER[0] })
}

export function AuxUpdate({ data }) {
  const FILTER_USERS = STATE.value.USERS.map(elm => elm.id === STATE.value.ON_UPDATE.id ? { id: elm.id, ...data } : elm)
  Handler({ USERS: FILTER_USERS, ON_UPDATE: {} })
}

export function DeleteUser(id_user) {
  const FILTER_USERS = STATE.value.USERS.filter(elm => elm.id !== id_user)
  Handler({ USERS: FILTER_USERS })
}

