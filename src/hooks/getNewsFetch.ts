

export const getNews = async (searchBy?:string,page?:string,tech?:string) =>{
    const url = `https://hn.algolia.com/api/v1/${searchBy}?&query=${tech}&page=${page}&hitsPerPage=10`
    const res = await fetch(url)
    const {hits} = await res.json()
    const news = hits.map((hit:any)=>{
        return {
            author:hit.author,
            story_title:hit.story_title,
            story_url:hit.story_url,
            created_at:hit.created_at
        }
    })
    
    return news ? news : []
    
     
}