import logo from '../assets/logo.png'
import menu_icon from '../assets/menu.png'
import search_icon from '../assets/search.png'
import upload_icon from '../assets/upload.png'
import more_icon from '../assets/more.png'
import notification_icon from "../assets/notification.png";
import profile_icon from "../assets/jack.png";
import { Link } from 'react-router'
import { useState } from 'react'

function Navbar({setSidebar}) {

  const [term, setTerm] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (term) {
      window.location.href = `/search/${term}`
    }
  }

  return (
    <nav className="flex justify-between items-center shadow sticky top-0 z-10 bg-white py-2.5 px-[2%]">
      <div className="flex items-center">
        <img
          className=" h-4 w-4 mr-6 cursor-pointer hidden md:block"
          onClick={() => setSidebar((prev) => !prev)}
          src={menu_icon}
          alt="menu"
        />
        <Link to={"/"}>
          <img className=" h-4 md:h-6 cursor-pointer " src={logo} alt="logo" />
        </Link>
      </div>

      <form onSubmit={onSubmit} className="flex items-center border border-[#ccc] rounded-3xl px-5 py-1 md:py-2 md:w-1/3 bg-white ">
        <input
          className="flex-1 outline-none border-none"
          type="text"
          placeholder="Search"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <img
          onClick={onSubmit}
          src={search_icon}
          alt="search"
          className="w-4 ml-2 cursor-pointer"
        />
      </form>

      <div className=" items-center gap-5 flex">
        <img
          className="w-6 h-6 cursor-pointer hidden md:inline-block"
          src={upload_icon}
          alt="upload"
        />
        <img className="w-6 h-6 cursor-pointer hidden md:inline-block" src={more_icon} alt="more" />
        <img
          className="w-6 h-6 cursor-pointer hidden md:inline-block"
          src={notification_icon}
          alt="notification"
        />
        <img
          className="rounded-full w-8 h-8 cursor-pointer"
          src={profile_icon}
          alt="profile"
        />
      </div>
    </nav>
  );
}

export default Navbar;