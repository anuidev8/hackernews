import { FC }  from 'react'


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
        <div></div>
    )
}


export default PostList