import { Link } from "react-router";
import { API_KEY, value_converter } from "../data";
import { useEffect, useState } from "react";
import moment from "moment";

function Feed({ category }) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=RU&videoCategoryId=${category}&key=${API_KEY}`
    );
    const data = await response.json();
    console.log(data);
    setData(data.items);
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((video) => (
        <Link
          to={`/watch/${video.snippet.categoryId}/${video.id}`}
          key={video.id}
        >
          <img
            className="rounded-lg w-full"
            src={video.snippet.thumbnails.high.url}
            alt="thumbnail"
          />
          <h3 className="font-semibold">
            {video.snippet.title.length > 50
              ? video.snippet.title.slice(0, 50) + "..."
              : video.snippet.title}
          </h3>
          <h4 className="text-sm text-zinc-500 mt-1 ">
            {video.snippet.channelTitle}
          </h4>
          <p className="text-sm text-zinc-500">
            {" "}
            {value_converter(video.statistics.viewCount)} views &bull;{" "}
            {moment(video.snippet.publishedAt).fromNow()}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default Feed;
