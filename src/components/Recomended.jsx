import { useEffect, useState } from "react";
import { API_KEY, value_converter } from "../data";
import { Link } from "react-router";

function Recomended({ categoryId }) {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=RU&videoCategoryId=${categoryId}&key=${API_KEY}`
    );
    const data = await response.json();
    console.log(data);
    setApiData(data.items);
  };

  useEffect(() => {
    if (categoryId) {
      fetchData();
    }
  }, [categoryId]);

  return (
    <div className="basis-full md:basis-[30%]">
      {apiData?.map((video) => (
        <Link to={`/watch/${video.snippet.categoryId}/${video.id}`} key={video.id} className="flex justify-between mb-2">
          <img
            className="basis-[49%] w-1/2"
            src={video.snippet.thumbnails.medium.url}
            alt="thumbnail"
          />
          <div className="basis-[49%] ">
            <h4 className=" text-sm mb-1 font-semibold">
              {video.snippet.title.length > 50
                ? video.snippet.title.slice(0, 50) + "..."
                : video.snippet.title}
            </h4>
            <p>{video.snippet.channelTitle}</p>
            <p>{value_converter(video.statistics.viewCount)} views</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Recomended;
