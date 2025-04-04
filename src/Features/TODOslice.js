import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   tasks: localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")) : []
}


export const TODOSlice = createSlice({
  name: 'Todo',
  initialState,
  reducers: {
     addtask: (state , action) => {
       const task = {
        id : Date.now(),
        text: action.payload

       };
       state.tasks.push(task);
       localStorage.setItem("task" , JSON.stringify(state.tasks))
    },
    deletetask: (state , action) => {
      const id = action.payload;
       state.tasks =  state.tasks.filter((task)=> task.id != id)
      localStorage.setItem("task" , JSON.stringify(state.tasks))
    },
    clearalltask: (state, action) => {
      state.tasks = [];
      localStorage.clear();
    },
  },
})

// Action creators are generated for each case reducer function
export const { addtask, deletetask, clearalltask } = TODOSlice.actions

export default TODOSlice.reducer