import {Checkbox, HStack, Stack, Text} from '@chakra-ui/react';
import {useTodos} from "../store.js";

const Todo = ({id, title, completed}) => {
  const toggleTodo = useTodos(state => state.toggleTodo);

  return (
    <HStack spacing={4}>
      <Checkbox isChecked={completed} onChange={() => toggleTodo(id)} />
      <Text>{title}</Text>
    </HStack>
  );
};

const TodoList = () => {
  const todos = useTodos(state => state.todos);

  return (
    <Stack minH="300px">
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </Stack>
  );
};

export {TodoList};
