import { RouterProvider, createBrowserRouter, redirect, Outlet} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import './App.css'

const router = createBrowserRouter([
  {
    path:'/',
    errorElement: <>Error</>,
    children: [
      { index: true, loader: ()=>redirect('/home')},
      {
        path: '/home',
        element: <HomePage />,
        // children: [
        //   { index: true,
        //     element: <Intro />,
        //   },
        // ],
      },
      {
        path:'*',
        loader: ()=>redirect('/home'),
      }
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />
 
}

export default App;