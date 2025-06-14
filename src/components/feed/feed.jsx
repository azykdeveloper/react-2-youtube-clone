import { Link } from 'react-router'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'


function Feed() {
  return (
    <div className='grid grid-cols-3 gap-4'>
      <Link to={'/video/1/3456'}>
        <img className='rounded-lg' src={thumbnail1} alt="thumbnail" />
        <h3 className='font-semibold'>
          Best channel to learn coding that help you to be a web developer
        </h3>
        <h4 className='text-sm text-zinc-500 mt-1 '>AzykDeveloper</h4>
        <p className='text-sm text-zinc-500'>15k views &bull; 2 days ago</p>
      </Link>
      <div>
        <img src={thumbnail2} alt="thumbnail" />
        <h3>
          Best channel to learn coding that help you to be a web developer
        </h3>
        <h4>AzykDeveloper</h4>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div>
        <img src={thumbnail3} alt="thumbnail" />
        <h3>
          Best channel to learn coding that help you to be a web developer
        </h3>
        <h4>AzykDeveloper</h4>
        <p>15k views &bull; 2 days ago</p>
      </div>
    </div>
  );
}

export default Feed;