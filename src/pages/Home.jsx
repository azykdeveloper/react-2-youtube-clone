import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";

function Home({sidebar}) {
  return (
    <>
      <Sidebar sidebar={sidebar} />

      <div className={`pt-5 pb-5 pr-[2%]  ${sidebar ? " pl-[17%]" : "pl-[7%]"}`}>
        <Feed />
      </div>
    </>
  );
}

export default Home;
