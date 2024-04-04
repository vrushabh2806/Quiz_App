import '../components/App.css'; // Adjust this path if necessary
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './main';
import Quiz from './Quiz';
import Result from './Result';
import { CheckUserExist } from '../helper/helper';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>
  },
  {
    path: '/quiz',
    element:  <CheckUserExist><Quiz /></CheckUserExist>
  },
 {
    path: '/result',
    element: <CheckUserExist><Result /></CheckUserExist>
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
