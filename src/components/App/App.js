import './App.css';
import codeImg from '../assets/img/progetti/code-img.png'

function App() {


  return (
    <div className="bg-primary min-h-screen px-20">
      <div className="flex items-center">
        <span className="text-secondary text-3xl">#</span>
        <span className="text-white text-3xl">progetti</span>
        <span className="border-b border-white-500 flex-grow ml-4 w-1" ></span>
      </div>
      <div className="relative mt-20">
        <img className="object-cover h-293 w-1/2" src = {codeImg}/>
        <div className='absolute right-0 top-0'>
          <p className='text-right text-secondary text-m'>Featured Project</p>
          <p className='text-right text-white text-3xl'>JETop Theme</p>
        </div>
        <div className='absolute bg-textBoxGrey  h-2/5 w-3/5 bg-white top-1/3 -right-0'>
          <p className='text-white p-5 text-right text-xl'>
            A minimal, dark blue theme for VS Code, <br/>
            Sublime Text, Atom, iTerm, and more. Available <br/>
            on Visual Studio Marketplace, Package Control, <br/>
            Atom Package Manager, and npm.</p>
          <p className='text-white text-right pt-20 text-sm'>TypeScript React Tailwind</p>
        </div>
      </div>


    </div>
  );
}

export default App;
