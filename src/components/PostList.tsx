import { FC }  from 'react'

//components
import PostCard from './PostCard'


export type Post = {
    author?:string
    story_title?:string
    story_url?:string
    created_at?:string
    fave?:boolean
}

interface Props  {
    postList?:Post[]
}

const PostList: FC<Props> = ({postList})=>{

    const onSetPost = (post:any) =>{
    
        let posts:any  = []
        const setNews:any = localStorage.getItem('news')
        const news = setNews ? JSON.parse(setNews) : []
        posts = [...news,post]  
        if(!post.fave ){
            const findPost =  posts.filter((item:any)=>item.created_at !== post.created_at)
            console.log(findPost);
            
            posts = findPost
        } 
        localStorage.setItem('news',JSON.stringify(posts))
      
        
    }
    return(
       <section>
           <div data-testid="posts-List-container" className='grid justify-center align-center'>
           {
               postList && postList.map((news:Post,key)=>(
                   <PostCard key={key} {...news} onSetPost={onSetPost} />

               ))
           }

           </div>
       </section>
    )
}


export default PostList