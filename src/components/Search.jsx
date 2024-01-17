import { MdSearch } from 'react-icons/md'

function Search({placeholder}) {
  return (
    <div className='relative font-fontInput'>
        <MdSearch size={20} className='absolute z-10 translate-x-2 translate-y-2' />
        <input type="text" placeholder={placeholder} className='bg-gray-50 focus:outline-none border rounded-md absolute top-0 left-0 bottom-0 px-10 py-4' />
    </div>
  )
}

export default Search