import thumbnail1 from "../assets/thumbnail1.png";
import thumbnail2 from "../assets/thumbnail2.png";
import thumbnail3 from "../assets/thumbnail3.png";
import thumbnail4 from "../assets/thumbnail4.png";
import thumbnail5 from "../assets/thumbnail5.png";
import thumbnail6 from "../assets/thumbnail6.png";
import thumbnail7 from "../assets/thumbnail7.png";
import thumbnail8 from "../assets/thumbnail8.png";

function Recomended() {
  return (
    <div className="basis-[30%]">
      <div className="flex justify-between mb-2">
        <img className="basis-[49%] w-1/2" src={thumbnail1} alt="thumbnail" />
        <div className="basis-[49%] ">
          <h4 className=" text-sm mb-1 font-semibold">Best youtube channel to learn web development</h4>
          <p>AzykDeveloper</p>
          <p>199K views</p>
        </div>
      </div>
      <div className="flex justify-between mb-2">
        <img className="basis-[49%] w-1/2" src={thumbnail1} alt="thumbnail" />
        <div className="basis-[49%] ">
          <h4 className=" text-sm mb-1 font-semibold">Best youtube channel to learn web development</h4>
          <p>AzykDeveloper</p>
          <p>199K views</p>
        </div>
      </div>
      <div className="flex justify-between mb-2">
        <img className="basis-[49%] w-1/2" src={thumbnail1} alt="thumbnail" />
        <div className="basis-[49%] ">
          <h4 className=" text-sm mb-1 font-semibold">Best youtube channel to learn web development</h4>
          <p>AzykDeveloper</p>
          <p>199K views</p>
        </div>
      </div>
      <div className="flex justify-between mb-2">
        <img className="basis-[49%] w-1/2" src={thumbnail1} alt="thumbnail" />
        <div className="basis-[49%] ">
          <h4 className=" text-sm mb-1 font-semibold">Best youtube channel to learn web development</h4>
          <p>AzykDeveloper</p>
          <p>199K views</p>
        </div>
      </div>
    </div>
  );
}

export default Recomended;
