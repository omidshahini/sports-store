
import './Header.css'

const Header = () => {

  return (
    <>
      <section className='font-oxanium'>
        <header className='px-12 py-5 w-full h-16'>
          <navbar className="flex flex-row justify-between items-center ">
            <a href="#">
              <img src="src/assets/images/header-logo.svg" alt="nike logo" />
            </a>
            <ul className='header-ul'>
              <li>Home</li>
              <li>About Us</li>
              <li>Products</li>
              <li>Contacu Us</li>
            </ul>
            <div className='login'>
              <a href="#">Sign in </a>
              <span>/</span>
              <a href="#"> Explore Now</a>
            </div>
        </navbar>
        </header>
        
      </section>
    </>
  )
}

export default Header
