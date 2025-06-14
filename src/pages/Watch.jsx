import { useParams } from 'react-router';
import PlayVideo from '../components/PlayVideo';
import Recomended from '../components/Recomended';

function Video() {

  const {videoId, categoryId} = useParams()
  return (
    <div className='px-[2%] py-5 flex justify-between flex-wrap '>
      <PlayVideo videoId={videoId} />
      <Recomended categoryId={categoryId} />
    </div>
  )
}

export default Video;
