import { FC, useEffect, useState } from 'react'
import moment from 'moment'

import Styles from '../styles/Postcard.module.css'
//Components
import { Icons } from './Icons'

interface Props {
    author?:string
    story_title?:string
    story_url?:string
    created_at?:string
    onSetPost?:any,
    fave?:boolean

}

const PostCard : FC<Props> = ({author,story_title,story_url,created_at,fave,onSetPost})=>{
    const [faveToggle,setFaveToggle] = useState<boolean>(false)

    const addToFave = () =>{
        setFaveToggle(!faveToggle)
        onSetPost  && onSetPost({
            author,
            story_title,
            story_url,
            created_at,
            fave:!faveToggle ? true : false
        },!faveToggle ? true : false)
    }

    const getHour = (date:string | any) =>{
        return moment(date).fromNow()
    }
    useEffect(()=>{
        
        
        fave && setFaveToggle(!faveToggle)
    },[])
    return(
       <article data-testid={story_url} className={`${Styles.postCard} d-flex`}>
            
           <a href={`${story_url ? story_url : '/'}`} target="_blank" rel={'noreferrer'} className={`${Styles.postCard__wrapper}`}>
           <div className={`${Styles.postCard__header}  d-flex align-center`} >
               <figure className='d-flex align-center'>
                    <Icons.TimeIcon  />
               </figure>
               <span><span> {getHour(created_at)}</span> by <span> {author}</span></span>
           </div>
           <p className={`${Styles.postCard__content}`}>
           {story_title}
           </p>
           </a>
           <ul className={`${Styles.postCard__actions}`}>
                <li className='h-full'>
                    <button onClick={()=>addToFave()} className={`h-full d-flex justify-center align-center ${Styles.postCard__button}`}>
                        
                     <figure className={`${Styles.postCard__actions_icon} ${   faveToggle && Styles.postCard__actions_icon_fill }`}>
                     <svg width="{'100%'}" height="{'100%'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.61 30.13"><title>heart</title><g id="b7f2a182-867f-432a-8d67-d5b9c0b82d0c" data-name="Layer 2"><g id="b536d74b-8e4a-4b28-a9f8-64fa781aea14" data-name="Layer 1"><g id="e89dc95e-84f1-4100-9d0b-3617a9a18cc8" data-name="f064d7ff-9ee8-4f0f-a668-689a5eebfafc"><g id="67efa64f-712b-48f7-9b18-77954c2d67fa" data-name="17b92602-ed17-4293-afe0-fbade2fc1ed8"><path d="M27.32,7.66c-3.15-5.4-12-3.82-12,2.95,0,4.66,5.57,9.42,12,15.8,6.43-6.38,12-11.14,12-15.8C39.32,3.81,30.45,2.3,27.32,7.66Z" strokeWidth={2} strokeMiterlimit={10} />
                     <path className={`${faveToggle ? Styles.heart__silhouettes_show : Styles.heart__silhouettes}`} d="M11.9,8.57.56.83Z" fill="none" stroke="#8919f4" strokeMiterlimit={10} strokeWidth={2} />
                     <path className={`${faveToggle ? Styles.heart__silhouettes_show : Styles.heart__silhouettes}`} d="M35.69,21.29l11.34,8Z" fill="none" stroke="#f2ba1c" strokeMiterlimit={10} strokeWidth={2} />
                     <path className={`${faveToggle ? Styles.heart__silhouettes_show : Styles.heart__silhouettes}`} d="M39.54,16.8,46,21.36Z" fill="none" stroke="#da1def" strokeMiterlimit={10} strokeWidth={2} />
                     <path className={`${faveToggle ? Styles.heart__silhouettes_show : Styles.heart__silhouettes}`} d="M12.18,15.41.78,8.29Z" fill="none" stroke="#f2ba1c" strokeMiterlimit={10} strokeWidth={2} />
                     </g></g></g></g></svg>
                    </figure>   

                       
                    
                    </button>
                </li>
           </ul>
       </article>
    )
}

export default PostCard

