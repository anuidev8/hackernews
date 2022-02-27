
import SelectOptionTech from "../components/SelectOptionTech"

const selectOptions = [
    {icon:'vue',title:'Angular'},
    {icon:'react',title:'React'},
    {icon:'vue',title:'Vuejs'},
]
const Posts = () => {
    const techSelected = (arg:any) =>{
            console.log(`selected ${arg}`)
    }
    return(
    <section>
        <h1>Welcome</h1>
        <SelectOptionTech onChange={techSelected} optionsItems={selectOptions} />
    </section>

    )
}

export default Posts