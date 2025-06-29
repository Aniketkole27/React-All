import React from "react";
import Services from "../appwrite/config";
import { Link } from "react-router-dom";
function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-900 rounded-xl border shadow-2xl grid ">
        <div className="w-full justify-center mb-4">
          <img
            // src={Services.getFilePreview(featuredImage)}
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt={title}
            className="rounded-xl object-cover"
          />
        </div>
        <div className="flex justify-center">
          <h2 className="card-title mb-5 px-5">{title}</h2>
        </div>
      </div>
    </Link>

    // <Link to={`/post/${$id}`}>
    //   <div className="card bg-base-100 w-96 shadow-sm">
    //     <div className="card-body">
    //       <img
    //         src={Services.getFilePreview(featuredImage)}
    //         alt={title}
    //         className="rounded-xl object-cover"
    //       />
    //       {/* {console.log(Services.getFilePreview(featuredImage)+'&mode=admin')} */}
    //     </div>
    //     <h2 className="card-title">{title}</h2>
    //   </div>
    // </Link>
  );
}

export default PostCard;
