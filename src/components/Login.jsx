export default function Login() {
  return (
    <div className="flex h-[600px] flex-col">
      <h1 className="text-2xl font-bold text-gray-800">Signin to your <br/> PopX account</h1>
      <p className="text-gray-500 mt-2 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <form className="space-y-2 text-sm">
        <div className="space-y-1">
            <div className="relative">
            <label htmlFor="fullName" className="absolute top-0 left-2 px-1 bg-[#F7F8F9] block text-xs font-medium text-indigo-600">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email address"
            className="w-full p-2 px-3 mt-2 border rounded-md focus:outline-none border-gray-400 focus:ring-1 focus:ring-indigo-500"
          />
          </div>
        </div>

        <div className="space-y-1">
            <div className="relative">
            <label htmlFor="fullName" className="absolute top-0 left-2 px-1 bg-[#F7F8F9] block text-xs font-medium text-indigo-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            className="w-full p-2 px-3 mt-2 border rounded-md focus:outline-none border-gray-400 focus:ring-1 focus:ring-indigo-500"
          />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-[#CBCBCB] rounded-md text-white hover:bg-gray-400 transition mt-2"
        >
          Login
        </button>
      </form>
    </div>
  )
}
