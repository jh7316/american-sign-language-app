import { RouterProvider, createBrowserRouter, redirect, Outlet} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import Main from './pages/Main/Main';
import './App.css'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Main />,
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
        path: '/courses',
        children: [
          { 
            path: 'beginner',
            element: <HomePage />,
          },
          { 
            path: 'intermediate',
            element: <HomePage />,
          },
          { 
            path: 'advanced',
            element: <HomePage />,
          },
        ],
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