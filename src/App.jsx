import Home from "./components/Home.jsx"
import Login from "./components/Login.jsx"
import Signup from "./components/Signup.jsx"
import Account from "./components/Account.jsx"
import Nav from "./components/Nav.jsx"
import { useState } from "react"

function App() {
  const [page,setPage] = useState(1)

  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="grid grid-cols-1">
        {page == 1 && <div className="border bg-[#F7F8F9] border-gray-200 rounded-sm p-6">
          <Home setPage={setPage} />
        </div>}
        {page == 2 && <div className="border border-gray-200 rounded-sm bg-[#F7F8F9] p-6">
          <Login setPage={setPage}/>
        </div>}
        {page == 3 && <div className="border bg-[#F7F8F9] border-gray-200 rounded-sm p-6">
          <Signup setPage={setPage} />
        </div>}
        {page == 4 && <div className="border bg-[#F7F8F9] border-gray-200 rounded-sm">
          <Account />
        </div>}
      </div>
      <Nav page={page} setPage={setPage}/>
    </main>
    </>
  )
}

export default App
