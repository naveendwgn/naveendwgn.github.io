import { BrowserRouter,Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <header className="w-full flex items-center bg-[#000000] sm:px-8 px-4 py-2">
        <Link>
        <h1 className="text-xl text-white font-bold">
          Naveen Dewangan
        </h1>
        </Link>
        <div className="ml-auto flex">
            <Link>
              Projects
            </Link>
            <Link>
              About
            </Link>
          </div>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#000000] min-h-[calc(100vh-73px)]">

      </main>
      <footer className="w-full flex items-center bg-[#000000] sm:px-8 px-4 py-2">
        <p className="text-sm text-white">Made with ❤️ by <span className='text-[#ff4545]'>Naveen Dewangan</span></p>
      </footer>
      
    </BrowserRouter>
  )
}

export default App
