import React from 'react'
import DarkMode from './Darkmode'

const menu = [
  {
    id: 1,
    name: "Hogar",
    link: "",
  },
  {
    id: 2,
    name: "Ciudades",
    link: "",
  },
  {
    id: 3,
    name: "Populares",
    link: "",
  },
  {
    id: 4,
    name: "Nosotros",
    link: "",
  },
  {
    id: 5,
    name: "Contacto",
    link: "",
  },
]

const Navbar = () => {
  return (
    <div className='shadow-md bg-white dark:bg-stone-900 dark:text-white duration-200 relative z-40 py-1'>
      <div
      data-aos='zoom-in'
      className='flex justify-center'>
        <ul className='flex items-center gap-4'>
          {menu.map((data) => (
            <li key={data.id}>
                <a href={data.link}
                className='inline-block px-4 py-3 hover:text-primary duration-200'
                >{data.name}</a>
            </li>
          ))}
          <button
          onClick={() => alert("No disponible")}
          className='bg-stone-900 text-white py-1 px-4 rounded-full flex items-center gap-3 group'
          >
              <span className='border-white border-[1px] rounded-full px-4 py-1 '>
              Ingresar
              </span>
              
          </button>

          {/*Darkmode switch*/}
          <div className='px-[1rem] '>
              <DarkMode/>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
