import home from '../assets/home.png'
import game_icon from '../assets/game_icon.png'
import automobiles from "../assets/automobiles.png";
import sports from '../assets/sports.png'
import entertainment from '../assets/entertainment.png'
import tech from '../assets/tech.png'
import music from '../assets/music.png'
import blogs from '../assets/blogs.png'
import news from '../assets/news.png'
import jack from '../assets/jack.png'
import simon from '../assets/simon.png'
import tom from '../assets/tom.png'
import megan from '../assets/megan.png'
import cameron from "../assets/cameron.png";

const sidebarLinks = [
  { name: "Home", icon: home },
  { name: "Games", icon: game_icon },
  { name: "Automobiles", icon: automobiles },
  { name: "Sports", icon: sports },
  { name: "Entertainment", icon: entertainment },
  { name: "Tech", icon: tech },
  { name: "Music", icon: music },
  { name: "Blogs", icon: blogs },
  { name: "News", icon: news },
]

const subscribedList = [
  { name: "Jack", icon: jack },
  { name: "Simon", icon: simon },
  { name: "Tom", icon: tom },
  { name: "Megan", icon: megan },
  { name: "Cameron", icon: cameron },
]

function Sidebar({sidebar}) {
  return (
    <div
      className={` h-screen fixed top-0  pt-20 border-r border-r-zinc-200 bg-white  ${
        sidebar ? "w-[15%]" : "w-[5%]"
      }`}
    >
      <div>
        {sidebarLinks.map((sidebarLink) => (
          <div
            key={sidebarLink.name}
            className="pl-6 sidebarLink flex items-center gap-3 mb-5 w-fit cursor-pointer flex-wrap text-sm text-zinc-500"
          >
            <img
              className="w-6 h-6"
              src={sidebarLink.icon}
              alt={sidebarLink.name}
            />
            <p className={`${!sidebar && "hidden"}`}>{sidebarLink.name}</p>
          </div>
        ))}

        <hr className=" text-zinc-200 mb-5 " />

        <h4
          className={`pl-6 text-zinc-400 text-sm mb-5 font-semibold ${
            !sidebar && "hidden"
          }`}
        >
          Subscribed
        </h4>

        {subscribedList.map((user) => (
          <div key={user.name} className="sidebarLink pl-6 flex gap-3 mb-4 text-sm text-zinc-500 cursor-pointer">
            <img
              className="w-6 h-6 rounded-full"
              src={user.icon}
              alt={user.name}
            />
            <p className={`${!sidebar && "hidden"}`}>{user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
