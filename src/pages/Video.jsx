import PlayVideo from '../components/PlayVideo';
import Recomended from '../components/Recomended';

function Video() {
  return (
    <div className='px-[2%] py-5 flex justify-between flex-wrap '>
      <PlayVideo />
      <Recomended />
    </div>
  )
}

export default Video;
