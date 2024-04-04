import { FaUser, FaUsers } from "react-icons/fa"

function Card({data, label, icon}) {
  return (
    <div className="p-4">
        <div className="flex items-center justify-center  flex-col border-t border-green-500 border-2 py-6 px-7 shadow-lg rounded-lg ">
            <div className="flex items-center justify-center w-11 h-11 rounded-full bg-green-100 my-2">
                {/* Icon */}
                {icon}
            </div>
            <div className="flex flex-col justify-center items-center">
                {/* Number */}
                <h4 className="text-2xl">{data}</h4>
                <span>{label}</span>
            </div>
        </div>
    </div>
  )
}

export default Card