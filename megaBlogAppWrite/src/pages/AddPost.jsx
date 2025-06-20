import React from 'react'
import { Container,PostFrom } from '../components' 
import  Services  from '../appwrite/config'

function AddPost() {
    return (
        <div className='py-8'>
            <Container>
                <PostFrom />
            </Container>
        </div>
    )
}

export default AddPost
