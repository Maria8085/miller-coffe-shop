import './App.scss';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './pages/main/main';
import {
  BrowserRouter,Routes,Route
} from "react-router-dom";
import NoPage from './pages/nopage/nopage';
import Catalogs from './pages/catalogs/catalogs';

const router =[
  {
    path: "/main",
    element: <Main/>,
  },
  {
    path: "/",
    element: <NoPage/>,
  },
  {
    path: "/catalogs",
    element: <Catalogs/>,
  },
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
            {router.map(route => (
              <Route element={route.element} path={route.path}/>
            ))}
        </Routes>
        <Footer/>
    </BrowserRouter>    
    </div>
  );
}

export default App;
