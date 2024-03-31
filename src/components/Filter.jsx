import {Button, Stack} from '@chakra-ui/react';

const Filter = () => {
  const filter = 'all';

  return (
    <Stack spacing={2} direction="row" mt="8">
      <Button isDisabled={filter === 'all'}>All</Button>
      <Button isDisabled={filter === 'uncompleted'}>Not completed</Button>
      <Button isDisabled={filter === 'completed'}>Completed</Button>
    </Stack>
  );
};

export {Filter};
