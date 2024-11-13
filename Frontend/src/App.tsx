import { RouterProvider, createBrowserRouter, redirect, Outlet} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import Main from './pages/Main/Main';
import CoursePage from './pages/CoursePage/CoursePage';
import { COURSE_CONTENTS } from './constants/constants';
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
            element: <CoursePage key='beginner' {...COURSE_CONTENTS[0]} />,
          },
          { 
            path: 'intermediate',
            element: <CoursePage key='intermediate' {...COURSE_CONTENTS[1]}/>,
          },
          { 
            path: 'advanced',
            element: <CoursePage key='advanced' {...COURSE_CONTENTS[2]}/>,
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