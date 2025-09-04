
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
            <ul className='flex flex-row justify-between items-center gap-20 text-zinc-600'>
              <li>Home</li>
              <li>About Us</li>
              <li>Products</li>
              <li>Contacu Us</li>
            </ul>
            <div className='text-white text-xl border-2 border-amber-100 px-1.5 border-r-amber-800 text-center rounded-se-2xl rounded-es-2xl border-l-amber-800'>
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
