import { BrowserRouter,Routes,Route } from 'react-router-dom'
import MainPage from "@/pages/index/main"
import SidePage from "@pages/index/side"
import SetPage from "@pages/index/set"
import DrinkPage from "@pages/index/drinks"


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index path='/' element={<MainPage />}></Route>
          <Route path='/side' element={<SidePage />} />
          <Route path='/drinks' element={<DrinkPage />} />
          <Route path='/set' element={<SetPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App