import image from '../assets/image.png'

export default function Account() {
  return (
    <div className="flex flex-col">
      <h1 className="text-xl p-3 font-medium text-gray-800">Account Settings</h1>
      <hr className="text-gray-300" />
      <div className="flex items-start mt-6 p-4 space-x-2">
        <div className="relative">
          <img
            src={image}
            alt="Profile picture"
            width={70}
            height={70}
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="font-medium text-sm">Marry Doe</h2>
          <p className="text-gray-500 text-xs">Marry@Gmail.Com</p>
        </div>
      </div>

      <div className="p-4 pt-2">
        <p className="text-gray-800 text-xs">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
          Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>

      <div className="mt-6 border-t border-gray-300 border-dashed pt-6"></div>
    </div>
  )
}
