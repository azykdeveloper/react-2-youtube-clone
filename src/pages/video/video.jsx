import PlayVideo from '../../components/play_video/play_video';
import Recomended from '../../components/recomended/recomended';
import './video.css'

function Video() {
  return (
    <div className='px-[2%] py-5 flex justify-between flex-wrap '>
      <PlayVideo />
      <Recomended />
    </div>
  )
}

export default Video;
