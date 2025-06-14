import like from "../assets/like.png";
import dislike from "../assets/dislike.png";
import share from "../assets/share.png";
import save from "../assets/save.png";
import { useEffect, useState } from "react";
import { API_KEY, value_converter } from "../data";
import moment from "moment";

function PlayVideo({ videoId }) {

  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentsData, setCommentsData] = useState(null);

  // fetch video data
  const fetchVideoData = async () => {
    if (!videoId) return;

    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    );
    const data = await response.json();
    setApiData(data.items[0]);
  };
  
  // fetch channel data
  const fetchChannelData = async () => {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData?.snippet?.channelId}&key=${API_KEY}`
    );
    const data = await response.json();
    setChannelData(data.items[0]);
  };

  // fetch comments data
  const fetchCommentsData = async () => {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`
    );
    const data = await response.json();
    setCommentsData(data.items);
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    if (apiData?.snippet?.channelId) {
      fetchChannelData();
    }
  }, [apiData]);

  useEffect(() => {
    if (videoId) {
      fetchCommentsData();
    }
  }, [videoId]);

  return (
    <div className=" basis-full md:basis-[69%]">
      <iframe
        width={"100%"}
        style={{ aspectRatio: "16/9" }}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h3 className="mt-3 font-semibold text-xl">{apiData?.snippet?.title}</h3>
      <div className="play-video-info flex items-center justify-between flex-wrap mt-3 text-sm text-zinc-500">
        <p>
          {value_converter(apiData?.statistics?.viewCount)} views &bull;{" "}
          {apiData?.snippet?.publishedAt
            ? moment(apiData.snippet.publishedAt).fromNow()
            : ""}
        </p>

        <div className="flex items-center gap-4">
          <span className="cursor-pointer inline-flex items-center gap-1">
            <img className="w-5" src={like} alt="like" />{" "}
            {value_converter(apiData?.statistics?.likeCount)}
          </span>
          <span className="cursor-pointer inline-flex items-center gap-1">
            <img className="w-5" src={dislike} alt="dislike" />
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
        {channelData && (
          <img
            className="w-10 h-10 rounded-full"
            src={channelData.snippet.thumbnails.default.url}
            alt="jack"
          />
        )}
        <div className=" flex-1 leading-5">
          <p className="text-lg  font-semibold">
            {apiData?.snippet?.channelTitle}
          </p>
          <span className="text-sm text-zinc-500">
            {value_converter(channelData?.statistics?.subscriberCount)}{" "}
            subscribes
          </span>
        </div>
        <button className="bg-red-600 text-white py-2 px-8 cursor-pointer rounded hover:opacity-80">
          Subscribe
        </button>
      </div>

      <div className="video-description md:pl-[50px] my-4">
        <p className="text-sm mb-1 text-zinc-500">
          {apiData?.snippet?.description
            ? apiData.snippet.description.slice(0, 250)
            : "Description here"}
        </p>

        <hr className="text-zinc-200 my-3" />

        <h4 className="text-sm text-zinc-500">
          {value_converter(apiData?.statistics?.commentCount)} comments
        </h4>

        {commentsData?.map((comment) => (
          <div className="comment flex gap-4 items-start my-5" key={comment.id}>
            <img
              className="w-9 h-9 rounded-full"
              src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
              alt="user"
            />
            <div>
              <h3 className="mb-0.5 text-sm font-semibold">
                {comment.snippet.topLevelComment.snippet.authorDisplayName}
                <span className="text-xs text-zinc-500 ml-2 font-medium">
                  {moment(comment.snippet.topLevelComment.snippet.updatedAt).fromNow()}
                </span>
              </h3>
              <p>
                {comment.snippet.topLevelComment.snippet.textOriginal}
              </p>
              <div className="comment-actions flex items-center text-sm my-2">
                <img className="w-5 h-5 mr-1" src={like} alt="like" />
                <span className="mr-2 text-zinc-500">{value_converter(comment.snippet.topLevelComment.snippet.likeCount)}</span>
                <img className="w-5 h-5 mr-1" src={dislike} alt="dislike" />
                {/* <span>2</span> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlayVideo;
