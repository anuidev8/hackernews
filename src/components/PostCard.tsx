import { FC } from 'react'

interface Props {
    author?:string
    story_title?:string
    story_url?:string
    created_at?:string

}

const PostCard : FC<Props> = ({story_title})=>{
    return(
       <section>
           <h2>{story_title}</h2>
       </section>
    )
}

export default PostCard

