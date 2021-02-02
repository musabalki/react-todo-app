export const initialState = {
    todos: []
}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case "ADD_TODO":
            return { ...state, todos: [action.payload, ...state.todos] };
        case "REMOVE_TODO":
            return { ...state, todos: [...state.todos].filter(todo => todo.id !== action.payload) }
        case "COMPLETE_TODO":
            return {
                ...state, todos: state.todos.map(todo => {
                    if (todo.id !== action.payload) {
                        return todo
                    } else {
                        return {
                            ...todo, isCompleted: !todo.isCompleted
                        }
                    }
                })
            };
        case "UPDATE_TODO":
          
            return {
                ...state, todos: state.todos.map(todo => {
                    if (todo.id !== action.payload.todoId) {
                        return todo
                    } else {
                        console.log({ ...todo, content: action.payload.newValue})
                        return {
                            ...todo, content: action.payload.newValue
                        }
                    }
                })
            };
            return { ...state };
        default:
            console.log("aaaaa")
            return { ...state };
    }
}

export default reducer;