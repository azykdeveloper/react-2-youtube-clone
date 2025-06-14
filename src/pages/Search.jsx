import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { API_KEY, value_converter } from "../data";
import moment from "moment";

function Search() {
  const {query} = useParams()

  const [searchData, setSearchData] = useState([])

  const fetchData = async () => {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&type=video&key=${API_KEY}`
    );
    const data = await response.json();
    console.log(data);
    setSearchData(data.items);
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  return ( 
    <div className="p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {searchData.map((video) => (
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
              {video.snippet.title}
            </h3>
            <p className="text-sm text-zinc-400">
              {moment(video.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Search
