import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navigation from './Components/Navigation'
import AllQuotes from './pages/All'
import NewQuotes from './pages/New'
import Show from './pages/ShowQuote'

function App() {

  return (
    <>
    <Navigation/>
    <Routes>
      <Route path='/all' element={<AllQuotes/>}></Route>
      <Route path='/add' element={<NewQuotes/>}></Route>
      <Route path='/quote/:id' element={<Show/>}></Route>
    </Routes>
      
    </>
  )
}

export default App
