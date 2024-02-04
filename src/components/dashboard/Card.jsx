import { FaUser, FaUsers } from "react-icons/fa"

function Card() {
  return (
    <div className="rounded-md py-4">
        <div className="flex items-center justify-center flex-col border-t border-green-500 border-2">
            <div className="w-11 h-11 rounded-full bg-green-100 my-2">
                {/* Icon */}
                <FaUsers size={28} className="absolute translate-y-2 translate-x-2" />
            </div>
            <div className="flex flex-col justify-center items-center">
                {/* Number */}
                <h4 className="text-2xl">50</h4>
                <span>Total No. of Premium Visitors</span>
            </div>
        </div>
    </div>
  )
}

export default Card