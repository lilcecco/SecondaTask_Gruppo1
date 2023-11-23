const Home = () => {
  return (
    <div className="bg-brown min-h-screen">
      <header className="flex justify-between px-20 py-10">
        <div className="logo"></div>
        <nav>
          <ul className="flex gap-x-10">
            <li>
              <span className="text-green text-lg">#</span>
              <span className="text-white text-lg">home</span>
            </li>
            <li>
              <span className="text-green text-lg">#</span>
              <span className="text-gray text-lg">skills</span>
            </li>
            <li>
              <span className="text-green text-lg">#</span>
              <span className="text-gray text-lg">progetti</span>
            </li>
            <li>
              <span className="text-green text-lg">#</span>
              <span className="text-gray text-lg">about</span>
            </li>
            <li>
              <span className="text-green text-lg">#</span>
              <span className="text-gray text-lg">contatti</span>
            </li>
          </ul>
        </nav>
      </header>

      <div className="flex items-center px-20">
        <span className="text-green text-3xl">#</span>
        <span className="text-white text-3xl">progetti</span>
        <span className="border-b border-white-500 flex-grow ml-4 w-1" ></span>
      </div>
    </div>
  )
}

export default Home;