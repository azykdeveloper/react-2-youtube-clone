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
  { id: 0, name: "Home", icon: home },
  { id: 20, name: "Games", icon: game_icon },
  { id: 2, name: "Automobiles", icon: automobiles },
  { id: 17, name: "Sports", icon: sports },
  { id: 24, name: "Entertainment", icon: entertainment },
  { id: 28, name: "Tech", icon: tech },
  { id: 10, name: "Music", icon: music },
  { id: 22, name: "Blogs", icon: blogs },
  { id: 25, name: "News", icon: news },
]

const subscribedList = [
  { name: "Jack", icon: jack },
  { name: "Simon", icon: simon },
  { name: "Tom", icon: tom },
  { name: "Megan", icon: megan },
  { name: "Cameron", icon: cameron },
]

function Sidebar({sidebar, category, setCategory}) {
  return (
    <div
      className={`no-scrollbar hidden md:block h-screen overflow-auto fixed top-0  pt-20 border-r border-r-zinc-200 bg-white  ${
        sidebar ? "w-[15%]" : "w-[5%]"
      }`}
    >
      <div>
        {sidebarLinks.map((sidebarLink) => (
          <div
            className={`pl-6 sidebarLink flex items-center gap-3 mb-5 w-fit cursor-pointer flex-wrap text-sm text-zinc-500 `}
            key={sidebarLink.name}
            onClick={() => setCategory(sidebarLink.id)}
          >
            <img
              className={`h-6 pb-1 ${
                category === sidebarLink.id && "border-b-3 border-red-600"
              }`}
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
          <div
            key={user.name}
            className="sidebarLink pl-6 flex gap-3 mb-4 text-sm text-zinc-500 cursor-pointer"
          >
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
