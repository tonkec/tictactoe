import { apiClient } from '..';

export interface IMoveProps {
  row: number;
  col: number;
  id: number;
}

const makeMove = ({ id, row, col }: IMoveProps) => {
  const client = apiClient({ isAuth: false });
  return client.post(`games/${id}/move/`, { row, col });
};

export { makeMove };
