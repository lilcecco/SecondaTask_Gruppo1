const Home = () => {
  return (
    <div className="bg-brown min-h-screen">
      {/* Header */}
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

      {/* Hero */}
      <div className="flex justify-between p-20">
        <div className="w-2/4 flex flex-col justify-between">
          <div className="mt-20">
            <h1 className="font-poppins font-medium">
              <span className="text-white ">Sono uno </span>
              <span className="text-green">sviluppatore<br /> full-stack</span>
            </h1>
            <p className="font-poppins text-gray mt-8">He crafts responsive websites where<br /> technologies meet creativity</p>
            <div className="absolute border border-green rounded-lg text-white py-1.5 px-4 mt-10 hover:bg-green transition duration-300 cursor-pointer">Contattami</div>
          </div>
          <div>
            <div className="flex gap-2">
              <img src="/img/Github.svg" alt="" />
              <img src="/img/Figma.svg" alt="" />
              <img src="/img/Linkedin.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-2/4">
          <img src="/img/hero.gif" alt="" className="w-full" />
          <div>
            <span className="text-gray">{"< Currently working on "}</span>
            <span className="text-white">Portfolio</span>
            <span className="text-gray">{"/>"}</span>
          </div>
        </div>
      </div>

    {/* Skills */}
      <div className="flex items-center px-20">
        <span className="text-green text-3xl">#</span>
        <span className="text-white text-3xl font-medium">skills</span>
        <span className="border-b border-green ml-4 w-1/5" ></span>
      </div>
      <div className="flex gap-x-24 justify-between p-20">
        <div className="relative flex flex-col justify-center gap-y-3 border-2 border-gray rounded-[20px] px-3 py-40 w-1/3">
          <div className="absolute top-[-20px] left-1/2 translate-x-[-50%] text-white text-2xl text-medium px-4 bg-brown">Frontend</div>
          <div className="py-3 text-white text-center font-poppins text-lg font-medium border-[3px] rounded-[10px] border-green">Javascript</div>
          <div className="py-3 text-white text-center font-poppins text-lg font-medium border-[3px] rounded-[10px] border-green">React</div>
          <div className="py-3 text-white text-center font-poppins text-lg font-medium border-[3px] rounded-[10px] border-green">Typescript</div>
        </div>
        <div className="relative flex flex-col justify-center gap-y-3 border-2 border-gray rounded-[20px] px-3 py-40 w-1/3">
          <div className="absolute top-[-20px] left-1/2 translate-x-[-50%] text-white text-2xl text-medium px-4 bg-brown">Backend</div>
          <div className="py-3 text-white text-center font-poppins text-lg font-medium border-[3px] rounded-[10px] border-green">Node JS</div>
        </div>
        <div className="relative flex flex-col justify-center gap-y-3 border-2 border-gray rounded-[20px] px-3 py-40 w-1/3">
          <div className="absolute top-[-20px] left-1/2 translate-x-[-50%] text-white text-2xl text-medium px-4 bg-brown">Tools</div>
          <div className="py-3 text-white text-center font-poppins text-lg font-medium border-[3px] rounded-[10px] border-green">GitHub</div>
          <div className="py-3 text-white text-center font-poppins text-lg font-medium border-[3px] rounded-[10px] border-green">Figma</div>
        </div>
      </div>

      {/* Progetti */}
      <div className="px-20">
        <div className="flex items-center">
          <span className="text-green text-3xl">#</span>
          <span className="text-white text-3xl">progetti</span>
          <span className="border-b text-green flex-grow ml-4" />
        </div>
        <div className="relative mt-20">
          <img className="w-3/5" src="/img/progetti.png" />
          <div className='absolute top-1/2 translate-y-[-50%] right-0 left-1/2'>
            <p className='text-right text-green text-xs'>Featured Project</p>
            <p className='text-right text-white text-2xl font-bold mt-1'>JETop Theme</p>
            <div className='text-white bg-secondary-gray text-right text-[15px] p-6 mt-6'>
              A minimal, dark blue theme for VS Code, <br />
              Sublime Text, Atom, iTerm, and more. Available <br />
              on Visual Studio Marketplace, Package Control, <br />
              Atom Package Manager, and npm.
            </div>
            <p className='text-white text-right text-sm mt-4'>TypeScript React Tailwind</p>
            <div className="flex gap-x-2 justify-end mt-2">
              <img className="w-9 h-9" src="/img/GitHub.svg" alt="First SVG" />
              <img className="w-9 h-9" src="/img/external-link.svg" alt="Second SVG" />
            </div>
          </div>
        </div>
        <div className="flex justify-end relative mt-32 mb-20">
          <img className="w-3/5" src="/img/progetti.png" />
          <div className='absolute top-1/2 translate-y-[-50%] right-1/2 left-0'>
            <p className='text-green text-xs'>Featured Project</p>
            <p className='text-white text-2xl font-bold font-poppins mt-1'>Nome progetto</p>
            <div className='text-white font-poppins bg-secondary-gray text-[15px] p-6 mt-6'>
              A minimal, dark blue theme for VS Code, Sublime <br />
              Text, Atom, iTerm, and more. Available on Visual <br />
              Studio Marketplace, Package Control, Atom Package <br />
              Manager, and npm.
            </div>
            <p className='text-white text-sm mt-4'>TypeScript React Tailwind</p>
            <div className="flex gap-x-2 mt-2">
              <img className="w-9 h-9" src="/img/GitHub.svg" alt="First SVG" />
              <img className="w-9 h-9" src="/img/external-link.svg" alt="Second SVG" />
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div>
        <div className="flex items-center px-20">
          <span className="text-green text-3xl">#</span>
          <span className="text-white text-3xl">about</span>
          <span className="border-b text-green flex-grow ml-4" />
        </div>
        <div className="relative flex justify-between p-20">
          <div className="absolute -left-32 top-10 w-44 h-44 border border-gray"></div>
          <div className='w-3/5'>
            <p className='text-gray text-base'>
              Hello, i’m Elias! <br /> <br />
              I’m a self-taught front-end developer based in Kyiv,<br />
              Ukraine. I can develop responsive websites from <br />
              scratch and raise them into modern user-friendly web <br />
              experiences. <br /> <br />
              Transforming my creativity and knowledge into a <br />
              websites has been my passion for over a year. I have <br />
              been helping various clients to establish their <br />
              presence online. I always strive to learn about the <br />
              newest technologies and frameworks.<br />
            </p>
            <div className="absolute border border-green rounded-lg text-white py-1.5 px-4 hover:bg-green transition duration-300 cursor-pointer mt-16">Contattami</div>
          </div>
          <img className="object-cover w-1/5" src="/img/about.png" />
        </div>
      </div>

      {/* Contatti */}
      <div className="flex items-center px-20">
        <span className="text-green text-3xl">#</span>
        <span className="text-white text-3xl font-medium">contatti</span>
        <span className="border-b border-green ml-4 w-2/4" ></span>
      </div>
      <div className="relative flex p-20 items-center justify-between">
        <img src="/img/details-1.png" alt="" className="absolute top-1 left-0" />
        <div className="w-2/4">
          <img src="/img/hero.gif" alt="" className="w-full" />
        </div>
        <div className="w-2/5">
          <p className="text-gray text-right">I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.</p>
          <form className="flex flex-col gap-y-8 mt-12">
            <div className="flex gap-x-8 w-full">
              <input type="text" name="" id="" className="w-2/4" placeholder="Nome" />
              <input type="email" name="" id="" className="w-2/4" placeholder="Email" />
            </div>
            <input type="text" name="" id="" placeholder="Oggetto" />
            <textarea name="" id="" rows="8" placeholder="Testo"></textarea>
            <button className="text-white border border-green rounded-lg py-1 w-28 hover:bg-green transition duration-300">Invia</button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray px-20 py-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-12">
            <div className="flex gap-2">
              <img src="/img/favicon-jetop-01.svg" alt="" />
              <span className="text-white text-2xl font-bold">Elias</span>
            </div>
            <div className="text-gray">elias@elias.ml</div>
          </div>
          <div className="text-white text-2xl font-medium">Social</div>
        </div>
        <div className="flex justify-between mt-4">
          <div className="text-white">Sviluppatore frontend</div>
          <div className="flex gap-2">
            <img src="/img/Github.svg" alt="" />
            <img src="/img/Figma.svg" alt="" />
            <img src="/img/Linkedin.svg" alt="" />
          </div>
        </div>
        <div className="text-center text-gray mt-10">Designed with &#x2764; by JEToP</div>
      </footer>


    </div>
  )
}

export default Home;