import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddData from './pages/AddData'
import Insights from './pages/Insights'
import { UserProvider } from './context/globalData'
import ErrorPage from './pages/ErrorPage'
import Hero from './pages/Hero'

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/add-data" element={<AddData />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
    </UserProvider>
  )
}

export default App
