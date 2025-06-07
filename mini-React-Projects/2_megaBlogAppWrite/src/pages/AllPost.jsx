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
        <div className='w-full py-8 h-screen'>
            <Container>
               <div className="grid gap-2">
                {posts.map((post)=>(
                    <div key={post.$id} className='p-2 w-1/4'>
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
