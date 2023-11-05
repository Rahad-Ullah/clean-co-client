import { Outlet } from "react-router-dom"
import MainLayout from "./components/Layout/MainLayout"


function App() {

  return (
    <>
      <MainLayout>
        <Outlet></Outlet>
        <h1 className="text-3xl text-center py-12">Clean Co</h1>
      </MainLayout>
    </>
  )
}

export default App
