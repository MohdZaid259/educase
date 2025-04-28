import Home from "./components/Home.jsx"
import Login from "./components/Login.jsx"
import Signup from "./components/Signup.jsx"
import Account from "./components/Account.jsx"

function App() {

  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-7xl">
        <div className="border bg-[#F7F8F9] border-gray-200 rounded-sm p-6">
          <Home />
        </div>
        <div className="border border-gray-200 rounded-sm bg-[#F7F8F9] p-6">
          <Login />
        </div>
        <div className="border bg-[#F7F8F9] border-gray-200 rounded-sm p-6">
          <Signup />
        </div>
        <div className="border bg-[#F7F8F9] border-gray-200 rounded-sm">
          <Account />
        </div>
      </div>
    </main>
    </>
  )
}

export default App
