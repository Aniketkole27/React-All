import React,{useState,useEffect} from 'react'
import Services from '../appwrite/config'
import { Container,PostCard } from '../components'

function AllPost() {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        Services.allPost([]).then((posts)=>{
            if(posts){
                setPosts(posts.documents)
            }
        })
    },[])

    return (
        <div className='w-full py-8'>
            <Container>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {posts.map((post)=>(
                    <div key={post.$id} className=''>
                        {/* <PostCard post={post} /> */}
                        <PostCard {...post} />
                    </div>
                ))}
               </div>
            </Container>
        </div>
    )
}

export default AllPost
