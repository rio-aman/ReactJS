import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello World!"}]
}

// slice is basically reducers big version and reduces is a functionality that's it 

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // addTodo me means redux me yaha pr do chez milega state and action like below
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload  // payload ek object hai 
            }
            state.todos.push(todo)
        },
        // state me jo bhi currentstate hoga vo milaga or action me jo bhi data
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        // assigment to create update todo and delete todo  
        
        // updateTodo: (state, action) => {
        //     state.todos.map((todo) => todo.id === action.payload.id ? :)
        // }
    }
})

// we need to export to things bcz like above we don't export slice
export const {addTodo, removeTodo} = todoSlice.actions

// STORE NEEDS ALL REDUCERS LIST BCZ STORE WILL NOT ADD JUST RANDOM REDUCERS

export default todoSlice.reducer