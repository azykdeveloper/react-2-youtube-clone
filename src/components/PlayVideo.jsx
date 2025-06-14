import video1 from '../assets/video.mp4'
import like from '../assets/like.png'
import dislike from '../assets/dislike.png'
import share from '../assets/dislike.png'
import save from '../assets/save.png'
import jack from "../assets/jack.png";
import user_profile from "../assets/user_profile.jpg";

function PlayVideo() {
  return (
    <div className=" basis-[69%]">
      <video className="w-full" src={video1} controls></video>
      <h3 className="mt-3 font-semibold text-xl">
        Best youtube channel to learn web development
      </h3>
      <div className="play-video-info flex items-center justify-between flex-wrap mt-3 text-sm text-zinc-500">
        <p>1525 Views &bull; 2 days ago</p>

        <div className="flex items-center gap-4">
          <span className="cursor-pointer inline-flex items-center gap-1">
            <img className="w-5" src={like} alt="like" /> 125
          </span>
          <span className="cursor-pointer inline-flex items-center gap-1">
            <img className="w-5" src={dislike} alt="dislike" /> 10
          </span>
          <span className="cursor-pointer inline-flex items-center gap-1">
            <img className="w-5" src={share} alt="share" /> Share
          </span>
          <span className="cursor-pointer inline-flex items-center gap-1">
            <img className="w-5" src={save} alt="save" /> Save
          </span>
        </div>
      </div>

      <hr className="text-zinc-200 my-3" />

      <div className="publisher mt-5 flex gap-2 items-center">
        <img className="w-10 h-10 rounded-full" src={jack} alt="jack" />
        <div className=" flex-1 leading-5">
          <p className="text-lg  font-semibold">AzykDeveloper</p>
          <span className="text-sm text-zinc-500">1M subscribes</span>
        </div>
        <button className="bg-red-600 text-white py-2 px-8 cursor-pointer rounded hover:opacity-80">
          Subscribe
        </button>
      </div>

      <div className="video-description pl-[50px] my-4">
        <p className="text-sm mb-1 text-zinc-500">
          Channel that makes learning easy
        </p>
        <p className="text-sm mb-1 text-zinc-500">
          Subscribe AzykDeveloper to watch more tutorials on web development
        </p>

        <hr className="text-zinc-200 my-3" />

        <h4 className="text-sm text-zinc-500">130 comments</h4>

        <div className="comment flex gap-4 items-start my-5">
          <img className='w-9 h-9 rounded-full' src={user_profile} alt="user" />
          <div>
            <h3 className='mb-0.5 text-sm font-semibold'>
              Jack Nikolas <span className='text-xs text-zinc-500 ml-2 font-medium'>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              aperiam odit? Fugiat voluptatem temporibus repudiandae veniam.
              Dolor, ab deleniti, magnam adipisci impedit perspiciatis excepturi
              dolore, inventore commodi mollitia tempora cum.
            </p>
            <div className="comment-actions flex items-center text-sm my-2">
              <img className='w-5 h-5 mr-1' src={like} alt="like" />
              <span className='mr-2 text-zinc-500'>244</span>
              <img className='w-5 h-5 mr-1' src={dislike} alt="dislike" />
              {/* <span>2</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayVideo;