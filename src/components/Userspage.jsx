import Search from './Search'

function Userspage() {
  return (
    <div>
        <div className='font-fontInput flex justify-between px-10'>
            <div>
                {/* Search bar */}
                <Search placeholder={"Search User"} />
            </div>
            <div className=''>
                {/* Add new button */}
                <button className=' bg-green-700 text-white px-4 py-1 rounded-lg hover:bg-green-500 hover:text-black duration-300 ease-in-out'>Add New</button>
            </div>
        </div>
    </div>
  )
}

export default Userspage