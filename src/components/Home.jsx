export default function Home() {
  return (
    <div className="flex h-[600px] flex-col justify-end ">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Welcome to PopX</h1>
        <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="mt-6 space-y-2">
        <button className="w-full py-2 bg-[#6C25FF] text-white rounded-md hover:bg-indigo-700 font-semibold transition">
          Create Account
        </button>
        <button className="w-full py-2 bg-[#CEBAFB] text-black rounded-md hover:bg-indigo-300 font-semibold transition">
          Already Registered? Login
        </button>
      </div>
    </div>
  )
}
