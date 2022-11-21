import { ls } from '@superstate/adapters';
import { superstate } from '@superstate/core';

export const TO_DO = {
  state: superstate({ TASKS: [], INPUT_VALUE: "" }).use([ls("todos")]),

  createToDo: () => {
    TO_DO.state.set((prev) => ({
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

  onChangeInput: (value) => TO_DO.state.set((prev) => ({
    ...prev, INPUT_VALUE: value ?? "Task"
  })),

  completeTask: (id) => {
    TO_DO.state.set(prev => ({
      ...prev,
      TASKS: prev.TASKS.map(elm => elm.id === id ? { ...elm, completed: true } : elm)
    }))
  },

  deleteTask: (id) => {
    TO_DO.state.set(prev => ({
      ...prev,
      TASKS: prev.TASKS.filter(elm => elm.id !== id)
    }))
  }
}
