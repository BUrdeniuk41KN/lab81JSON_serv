import StatusBar from './Components/StatusBar/StatusBar';
import TraficLight from './Components/Trafic_Lights/Trafic_Light';
import Home from './Components/Pages/Home/Home'
import ErrorPage from './Components/Pages/ErrorPage/ErrorPage'
import Header from './Components/Pages/Header'


import {
  createBrowserRouter,
  RouterProvider, Routes,
  MemoryRouter 
} from "react-router-dom";

function App({ location }) {



  const router = createBrowserRouter([
    {
      path: "/TraficLight",
      element: <TraficLight tlContoroller={<StatusBar />} />,
      errorElement: <ErrorPage />
    },
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />
    },
  ]);


  return (
    <div className="App">
      <Header/>
      <RouterProvider router={router}>
        <MemoryRouter initialEntries={location} initialIndex={0}>
          <Routes />
        </MemoryRouter>
      </RouterProvider>

    </div>
  );
}

export default App;
