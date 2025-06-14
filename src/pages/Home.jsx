import { useState } from "react";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";

function Home({sidebar}) {
  const [category, setCategory] = useState(0)
  return (
    <>
      <Sidebar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      />

      <div
        className={`pt-5 pb-5 pr-[2%] pl-[2%] ${sidebar ? " md:pl-[17%]" : "md:pl-[7%]"}`}
      >
        <Feed category={category} />
      </div>
    </>
  );
}

export default Home;
