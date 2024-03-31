import {Checkbox, HStack, Stack, Text} from '@chakra-ui/react';

const Todo = ({id, title, completed}) => {
  return (
    <HStack spacing={4}>
      <Checkbox isChecked={completed} />
      <Text>{title}</Text>
    </HStack>
  );
};

const TodoList = () => {
  const todos = [
    {id: 1, title: 'Title 1', completed: true},
    {id: 2, title: 'Title 2', completed: false}
  ];

  return (
    <Stack minH="300px">
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </Stack>
  );
};

export {TodoList};
