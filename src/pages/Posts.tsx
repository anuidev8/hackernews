import { Fragment, useEffect, useState } from 'react'


//hooks
import { getNews } from '../hooks/getNewsFetch'

//Components
import PostList,{Post} from "../components/PostList"
import SelectOptionTech from "../components/SelectOptionTech"
import Pagination from '../components/Pagination'

//data
const selectOptions = [
    {icon:'vue',title:'Angular'},
    {icon:'react',title:'Reactjs'},
    {icon:'vue',title:'Vuejs'},
]
const Posts = () => {
    const [news,setNews] = useState<Post[]>([])
    const [page, setPage] = useState<number>(1);
    const [tech,setTech] = useState<string>('')
    const [isLoading,setIsLoading] = useState<boolean>(true)
    const totalPages:number = news.length;


    const handlePages = (updatePage: number) => setPage(updatePage);

    const techSelected = (arg:any) =>{
            setTech(arg)
    }

    useEffect(()=>{
       setIsLoading(true)   
       getNews('search_by_date',`${page-1}`,tech).then((res)=>{
           setNews(res)
           setIsLoading(false)   
        })
        console.log('change');
        
       
    },[page,tech])
    return(
    <section>
        <h1>Welcome</h1>
        <SelectOptionTech onChange={techSelected} optionsItems={selectOptions} />
        {
            isLoading && <h3>Loading...</h3>
        }
        {
            !isLoading &&
            <Fragment>
                <PostList postList={news} />
                <Pagination
                    page={page}
                    totalPages={totalPages}
                    handlePagination={handlePages}
                />
            </Fragment>
        }
       
        
    </section>

    )
}

export default Posts