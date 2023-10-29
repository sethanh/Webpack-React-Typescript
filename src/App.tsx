import { BrowserRouters } from '@Src/Routes'
import { RouterProvider } from 'react-router-dom'
import { DashBoard } from '@Src/Layouts'
import '../assets/styles/app.css'
import '../assets/styles/app.scss'

const App = () => {
  return (
    <DashBoard>
      <RouterProvider router={BrowserRouters} />
    </DashBoard>
  )
}

export default App
