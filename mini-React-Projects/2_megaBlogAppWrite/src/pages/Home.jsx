import React, { useEffect, useState } from "react";
import Services from "../appwrite/config";
import { Container, PostCard,Button } from "../components";
import { useNavigate,Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    Services.allPost([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length > 0) {
    return (
      <div className="w-full py-8">
        <Container>
          <div className="flex flex-wrap">
            {posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                {/* <PostCard post={post} /> */}
                <PostCard {...post}/> 
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
            <div className="flex flex-wrap h-80">
                <div className="p-2 w-full">
                    <h1 className="text-2xl font-bold hover: text-gray-400">
                       Create Account to View Post
                    </h1>
                    <div className="flex justify-center mt-8">
                      <Link to="/signup">
                       <Button className="mx-5">Sign Up</Button>
                      </Link>
                      <Link to="/login">
                       <Button>Log in</Button>
                      </Link>
                    </div>
                </div>
            </div>
        </Container>
      </div>
    );
  }
}

export default Home;
