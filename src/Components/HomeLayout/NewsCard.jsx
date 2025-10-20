// import React from 'react';

// const NewsCard = ({news}) => {
//     return (
//         <div>
//             <p>{news.title}</p>
//             <img src={news.image_url} alt="" />
//         </div>
//     );
// };

// export default NewsCard;
import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaStar, FaRegEye } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  if (!news) return null; // In case data is still loading

  const formattedDate = news.author?.published_date
    ? new Date(news.author.published_date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Unknown date";

  return (
    <div className="card w-full bg-base-100 shadow-xl border rounded-2xl p-4">
      {/* Header: Author info */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3">
          <img
            src={news.author?.img}
            alt={news.author?.name}
            className="w-10 h-10 rounded-full border object-cover"
          />
          <div>
            <h3 className="font-semibold text-sm">{news.author?.name}</h3>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div >
        <div className="flex gap-4">
            <button className="btn  btn-sm"><CiBookmark /></button>
        <button className="btn  btn-sm">
 <CiShare2 />       
 </button>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold text-gray-800 mb-2">
        {news.title}
      </h2>

      {/* Thumbnail */}
      <figure className="mb-3 relative">
        {news.rating?.badge === "trending" && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-md shadow">
            Trending
          </span>
        )}
        <img
          src={news.thumbnail_url}
          alt="news thumbnail"
          className="rounded-xl w-full h-48 object-cover"
        />
      </figure>

      {/* Details */}
      <p className="text-sm text-gray-600 mb-2">
        {news.details
          ? `${news.details.slice(0, 150)}...`
          : "No description available."}
        <Link to={`/news-details/${news?.id}`} className="text-blue-600 cursor-pointer font-medium ml-1">
          Read More
        </Link>
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center text-sm text-gray-600 mt-2">
        <div className="flex items-center gap-1 text-orange-400">
          <FaStar />
          <span>{news.rating?.number || "N/A"}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaRegEye />
          <span>{news.total_view || 0}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
