import Search from "./Search";

function Userspage() {
  return (
    <div>
      <div className="font-fontInput flex justify-between px-10 ">
        <div className="w-full">
          {/* Search bar */}
          <Search placeholder={"Search User"} />
        </div>
        
      </div>
    </div>
  );
}

export default Userspage;
