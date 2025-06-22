import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Services from "../appwrite/config";
import auth from "../appwrite/auth";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector, useDispatch } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const [userData, setUserData] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const userData = useSelector((state) => state.userData);

  useEffect(() => {
    const getUser = async () => {
      try {
        const userInfo = await auth.getCurrentUser();
        setUserData(userInfo)
        // console.log(userData);
        
        if (slug) {
          await Services.getPost(slug).then((post) => {
            if (post) {
              setPost(post);
            }
          });
        } else navigate("/");
      } catch (err) {
        console.error(err);
      }
    };

    getUser();
  }, [slug, navigate]);

  if (!userData || !post) {
    return <p>Loading...</p>;
  }

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  const deletePost = () => {
    Services.deletePost(post.$id).then((status) => {
      if (status) {
        Services.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="py-8 h-screen text-gray-200">
      <Container>
        <div className="w-full flex justify-center mb-4 h-30 relative border rounded-xl p-2">
          <img
            src={Services.getView(post.featuredImage) + "&mode=admin"}
            alt={post.title}
            className="rounded-xl"
          />

          {isAuthor && (
            <div className="absolute right-6 top-6">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-500" className="mr-3">
                  Edit
                </Button>
              </Link>
              <Button bgColor="bg-red-500" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6">
          <h1 className="text-2xl font-bold">{post.title}</h1>
        </div>
        <div className="browser-css">{parse(post.content)}</div>
      </Container>
    </div>
  ) : null;
}
