import { Home } from "lucide-react"

export default function Nav(props){

  return (
    <div className="flex items-center justify-center space-x-4 py-4 mb-4">
      <button className="p-2 hover:bg-gray-100 rounded-md transition-colors" aria-label="Go to home">
        <Home className="w-5 h-5 text-gray-500" onClick={()=>props.setPage(1)} />
      </button>
      <button
        className={`p-2 hover:bg-gray-100 rounded-md transition-colors `}
        onClick={()=>props.setPage(prev=>prev-1)}
        aria-label="Previous panel"
        disabled={props.page == 1}
      >
        <span className="text-gray-500">&lt;</span>
      </button>
      <span className="text-sm text-gray-600">{props.page} of 4</span>
      <button
        className={`p-2 hover:bg-gray-100 rounded-md transition-colors `}
        onClick={()=>props.setPage(prev=>prev+1)}
        disabled={props.page==4}
        aria-label="Next panel"
      >
        <span className="text-gray-500">&gt;</span>
      </button>
    </div>
  )
}
