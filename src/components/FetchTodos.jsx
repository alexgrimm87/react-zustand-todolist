import {useShallow} from 'zustand/react/shallow'; //fix rerender when checked/unchecked input
import {Button} from '@chakra-ui/react';
import {useTodos} from '../store';

const FetchTodos = () => {
  const {loading, error, fetchTodos} = useTodos(useShallow(
  (state) => ({
      loading: state.loading,
      error: state.error,
      fetchTodos: state.fetchTodos
    })
  ));

  return (
    <Button isLoading={loading} onClick={fetchTodos}>
      {!error ? 'Get todos' : {error}}
    </Button>
  );
};

export {FetchTodos};
