import {shallow} from 'zustand/shallow';
import {Button} from '@chakra-ui/react';
import {useTodos} from '../store';

const FetchTodos = () => {
  const {loading, error, fetchTodos} = useTodos(
    (state) => ({
      loading: state.loading,
      error: state.error,
      fetchTodos: state.fetchTodos
    }),
    shallow //fix rerender when checked/unchecked input
  );

  return (
    <Button isLoading={loading} onClick={fetchTodos}>
      {!error ? 'Get todos' : {error}}
    </Button>
  );
};

export {FetchTodos};
