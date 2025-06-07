import React from "react";
import Services from "../appwrite/config";
import { Link } from "react-router-dom";
function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-white rounded-xl border h-60 shadow-2xl">
        <div className="w-full justify-center mb-4">
          <img
            src={Services.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl object-cover"
          />
          {/* {console.log(Services.getFilePreview(featuredImage)+'&mode=admin')} */}
        </div>
        <h2 className="text-xl whitespace-nowrap text-nowrap truncate  font-bold pb-3 my-right">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
