
import './Header.css'

function Header() {

  return (
    <>
      <section>
        <header className='px-12 py-5 w-full h-16'>
          <navbar className="flex flex-row justify-between items-center ">
            <a href="#">
              <img src="src/assets/images/header-logo.svg" alt="nike logo" />
            </a>
            <ul className='w-xl h-10 p-3 flex flex-row justify-between items-center gap-20 text-zinc-600 [&>li]:hover:cursor-pointer [&>li]:hover:text-white'>
              <li>Home</li>
              <li>About Us</li>
              <li>Products</li>
              <li>Contacu Us</li>
            </ul>
            <div className='text-white text-xl p-1 border-2 border-amber-100 px-1.5 border-r-lime-200 text-center rounded-se-2xl rounded-es-2xl border-l-amber-800'>
              <a href="#">Sign in</a>
              <span>/</span>
              <a href="#">Explore Now</a>
            </div>
        </navbar>
        </header>
        
      </section>
    </>
  )
}

export default Header
