export default function Signup() {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold text-gray-800">Create your<br/>  PopX account</h1>

      <form className="space-y-2 mt-4 text-sm">
        <div className="space-y-1">
          <div className="relative">
            <label htmlFor="fullName" className="absolute top-0 left-2 px-1 bg-[#F7F8F9] block text-xs font-medium text-indigo-600">
              Full Name<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              defaultValue="Marry Doe"
              className="w-full p-2 px-3 mt-2 border-gray-400  border rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="space-y-1">
          <div className="relative">
            <label htmlFor="fullName" className="absolute top-0 left-2 px-1 bg-[#F7F8F9] block text-xs font-medium text-indigo-600">
            Phone number<span className="text-red-600">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            defaultValue="Marry Doe"
            className="w-full p-2 px-3 mt-2 border-gray-400  border rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          </div>
        </div>

        <div className="space-y-1">
            <div className="relative">
            <label htmlFor="fullName" className="absolute top-0 left-2 px-1 bg-[#F7F8F9] block text-xs font-medium text-indigo-600">
            Email address<span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="registerEmail"
            defaultValue="Marry Doe"
            className="w-full p-2 px-3 mt-2 border-gray-400  border rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          </div>
        </div>

        <div className="space-y-1">
            <div className="relative">
            <label htmlFor="fullName" className="absolute top-0 left-2 px-1 bg-[#F7F8F9] block text-xs font-medium text-indigo-600">
            Password<span className="text-red-600">*</span>
          </label>
          <input
            type="password"
            id="registerPassword"
            defaultValue="Marry Doe"
            className="w-full p-2 px-3 mt-2 border  border-gray-400  rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          </div>
        </div>

        <div className="space-y-1">
            <div className="relative">
            <label htmlFor="fullName" className="absolute top-0 left-2 px-1 bg-[#F7F8F9] block text-xs font-medium text-indigo-600">
            Company name
          </label>
          <input
            type="text"
            id="company"
            defaultValue="Marry Doe"
            className="w-full p-2 px-3 mt-2 border  border-gray-400  rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          </div>
        </div>

        <div className="space-y-1 ">
          <p className="block text-xs font-medium text-indigo-600">
            Are you an Agency?<span className="text-red-600">*</span>
          </p>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="agency"
                value="yes"
                defaultChecked
                className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="agency"
                value="no"
                className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-48 bg-[#6C25FF] text-white rounded-md hover:bg-indigo-700 font-semibold transition"
        >
          Create Account
        </button>
      </form>
    </div>
  )
}
