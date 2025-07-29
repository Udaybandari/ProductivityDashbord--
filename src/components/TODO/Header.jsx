

const Header = ({setFilter}) => {

  return (
    <header className="flex w-199  gap-55 ">
   <h1 className="text-4xl font-bold">Tasks</h1>
        <div className="flex   custom-shadow rounded-md">
  <button className="text-[20px] rounded-md  w-full px-3 py-2 hover:bg-gray-300 cursor-pointer"onClick={() => setFilter("all")}>All</button>
  <button className="text-[20px] rounded-md  px-3 py-2 hover:bg-gray-300 cursor-pointer"onClick={() => setFilter("active")}>Active</button>
  <button className="text-[20px] rounded-md  px-3 py-2 hover:bg-gray-300 cursor-pointer"onClick={() => setFilter("completed")}>Completed</button>
</div>

        
    </header>
  )
};

export default Header;