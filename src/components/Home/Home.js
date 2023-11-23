const Home = () => {
  return (
    <div className="bg-brown min-h-screen">
      <header className="flex justify-between px-20 py-8 bg-secondary-brown/[0.5]">
        <div className="flex gap-x-1">
          <img src="/img/favicon-jetop-01.svg" alt="" />
          <span className="text-white text-lg">Elias</span>
        </div>
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

      <div className="flex justify-between px-20 py-20">
        <div className="">
          <h1 className="font-poppins font-medium mt-20">
            <span className="text-white ">Sono uno </span>
            <span className="text-green">sviluppatore<br /> full-stack</span>
          </h1>
          <p className="font-poppins text-gray mt-8">He crafts responsive websites where<br /> technologies meet creativity</p>
          <div className="absolute border border-green rounded-lg text-white py-2 px-4 mt-10">Contattami</div>
        </div>
        <div className="flex flex-col items-center">
          <img src="/img/hero.png" alt="" />
          <div>
            <span className="text-gray">{"< Currently working on "}</span>
            <span className="text-white">Portfolio</span>
            <span className="text-gray">{"/>"}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center px-20">
        <span className="text-green text-3xl">#</span>
        <span className="text-white text-3xl">progetti</span>
        <span className="border-b border-white-500 flex-grow ml-4 w-1" ></span>
      </div>
    </div>
  )
}

export default Home;