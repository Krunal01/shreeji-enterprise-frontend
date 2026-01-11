
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './routes'
import { ActiveThemeProvider } from './components/active-theme'

function App() {

  return (
    <>
      <ActiveThemeProvider>
        <RouterProvider router={router} />
      </ActiveThemeProvider>
    </>
  )
}

export default App