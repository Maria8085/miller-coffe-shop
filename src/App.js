import './App.scss'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { router } from './utils/constants'

function App() {
  console.log(Object.values(router).map((route) => route))
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {Object.values(router).map((route) => (
            <Route element={route.element} path={route.path} />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
