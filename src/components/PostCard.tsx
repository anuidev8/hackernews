import { FC } from 'react'

import Styles from '../styles/Postcard.module.css'
//Components
import { Icons } from './Icons'

interface Props {
    author?:string
    story_title?:string
    story_url?:string
    created_at?:string

}

const PostCard : FC<Props> = ({author,story_title,story_url,created_at})=>{
    //NECESITAMOS CAMBIAR EL TEST VALIDAR LA URL EL LA URL
    return(
       <article data-testid={story_url} className={`${Styles.postCard} d-flex`}>
           <div className={`${Styles.postCard__wrapper}`}>
           <div className={`${Styles.postCard__header}  d-flex align-center`} >
               <figure className='d-flex align-center'>
                    <Icons.TimeIcon  />
               </figure>
               <span>{created_at} by {author}</span>
           </div>
           <p className={`${Styles.postCard__content}`}>
           {story_title}
           </p>
           </div>
           <ul className={`${Styles.postCard__actions}`}>
                <li className='h-full'>
                    <button className='h-full d-flex justify-center align-center'>
                        
                        <Icons.HeartIcon  />
                    </button>
                </li>
           </ul>
       </article>
    )
}

export default PostCard

