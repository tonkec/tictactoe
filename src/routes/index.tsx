import { createBrowserRouter } from 'react-router-dom';
import { AuthGuard } from './guards/AuthGuard';
import { Login } from '../pages/Login';
import { Signup } from '../pages/Signup';
import { Home } from '../pages/Home';
import { NewGame } from '../pages/NewGame';
import { Game } from '@/pages/Game';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthGuard>
        <Home />
      </AuthGuard>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/new',
    element: (
      <AuthGuard>
        <NewGame />
      </AuthGuard>
    ),
  },
  {
    path: '/game/:id',
    element: (
      <AuthGuard>
        <Game />
      </AuthGuard>
    ),
  },
]);
