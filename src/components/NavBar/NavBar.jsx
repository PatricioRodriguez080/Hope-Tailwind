import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-marron-300 font-custom">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link to={"/"}>
            <img src="./images/LogoHope.png" className='cursor-pointer' alt="logo" />
          </Link>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className={`fas ${navbarOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <ScrollLink
                className="py-2 flex items-center text-base uppercase leading-snug cursor-pointer text-white hover:opacity-75 lg:px-3"
                to="servicios"
                smooth={true}
                duration={500}
                offset={-70}
              >
                Servicios
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                className="py-2 flex items-center text-base uppercase leading-snug cursor-pointer text-white hover:opacity-75 lg:px-3"
                to="productos"
                smooth={true}
                duration={500}
                offset={-70}
              >
                Productos
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                className="py-2 flex items-center text-base uppercase leading-snug cursor-pointer text-white hover:opacity-75 lg:px-3"
                to="equipo"
                smooth={true}
                duration={500}
                offset={-70}
              >
                Equipo
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                className="py-2 flex items-center text-base uppercase leading-snug cursor-pointer text-white hover:opacity-75 lg:px-3"
                to="contacto"
                smooth={true}
                duration={500}
                offset={-70}
              >
                Contáctanos
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar