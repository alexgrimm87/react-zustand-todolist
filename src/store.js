import {create} from 'zustand';
import {persist, createJSONStorage, devtools} from 'zustand/middleware';
import {nanoid} from "nanoid";

export const useTodos = create(devtools(persist((set, get) => ({
  todos: [
    {id: 1, title: 'Title 1', completed: true},
    {id: 2, title: 'Title 2', completed: false}
  ],
  loading: false,
  error: null,
  // //Variant 1
  // addTodo: (title) => set(state => {
  //   const newTodo = {id: nanoid(), title, completed: false};
  //   return {todos: [...state.todos, newTodo]};
  // }),

  // //Variant 2
  // addTodo: (title) => set(state => ({todos: [...state.todos, {id: nanoid(), title, completed: false}]})),

  //Variant 3
  addTodo: (title) => {
    const newTodo = {id: nanoid(), title, completed: false};
    set({todos: [...get().todos, newTodo]})
  },
  toggleTodo: (todoId) => set({
    todos: get().todos.map(
      todo => todoId === todo.id
        ? {...todo, completed: !todo.completed}
        : todo
    )
  }),
  fetchTodos: async () => {
    set({loading: true})
    
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
      if (!res.ok) throw new Error('Failed to fetch! Please try again.');
      set({ todos: await res.json(), error: null });
    } catch (error) {
      set({error: error.message})
    } finally {
      set({loading: false})
    }
  }
}),
  {
    name: 'todos-storage',
    storage: createJSONStorage(() => localStorage)
  }
)));

export const useFilter = create(set => ({
  filter: 'all',
  setFilter: (value) => set({filter: value})
}));
