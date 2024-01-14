import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"

function layout({children}) {
  return (
    <>
        <Sidebar />
        <Navbar />
        {children}
    </>
  )
}

export default layout