import { ls } from '@superstate/adapters';
import { superstate } from '@superstate/core';

export const TO_DO = {
  TO_DO_STATE: superstate({
    TASKS: [],
    INPUT_VALUE: ""
  })
    .use([ls("TO_DO")]),

  createToDo: () => {
    TO_DO.TO_DO_STATE.set((prev) => ({
      TASKS: [
        ...prev.TASKS,
        {
          id: prev.TASKS.length + 1,
          task: prev.INPUT_VALUE,
          completed: false
        }
      ],
      INPUT_VALUE: ""
    }));
  },

  onChangeInput: (value) => TO_DO.TO_DO_STATE.set((prev) => ({
    ...prev, INPUT_VALUE: value ?? "Task"
  }))
}

export const PHOTOS = {
  PHOTOS_STATE: superstate()
    .use([ls("PHOTOS")]),

  readPhotos: async () => {
    console.log(PHOTOS.PHOTOS_STATE.now())

    await fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => PHOTOS.PHOTOS_STATE.set(data))

    console.log(PHOTOS.PHOTOS_STATE.now())
  }
}
