
import {  useState,useEffect,Fragment } from 'react'

//Components
import PostList,{Post} from "../components/PostList"
import Pagination from '../components/Pagination'

const Faves = () => {
    
    const [news,setNews] = useState<Post[]>([])
    const [page, setPage] = useState<number>(1);
    const totalPages:number = news.length;

    const handlePages = (updatePage: number) => setPage(updatePage);


    useEffect(()=>{
        const setFavesNews:any = localStorage.getItem('news')
        const favesNews = setFavesNews ? JSON.parse(setFavesNews) : []   
        setNews(favesNews)
       
    },[page])

    return(
    <section>
       
        {
            news.length > 0  ?(
            <Fragment>
                <PostList postList={news} />
                {
                    totalPages > 1 &&
                    <Pagination
                        page={page}
                        totalPages={totalPages}
                        handlePagination={handlePages}
                    />
                }
            </Fragment>

            ):(
                <h2>No data found</h2>
            )
        }
    </section>

    )
    
}

export default Faves