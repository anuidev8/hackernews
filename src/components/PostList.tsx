import { FC }  from 'react'

//components
import PostCard from './PostCard'


export type Post = {
    author?:string
    story_title?:string
    story_url?:string
    created_at?:string
}

interface Props  {
    postList?:Post[]
}

const PostList: FC<Props> = ({postList})=>{
    return(
       <section>
           {
               postList && postList.map((news:Post,key)=>(
                   <PostCard key={key} {...news} />

               ))
           }
       </section>
    )
}


export default PostList