import { FC, useEffect, useState ,useRef} from 'react'

//Styles
import Styles from '../styles/SelectOption.module.css'

//Component
import { IconTechsCollection } from './IconTechsCollection'
import { Icons } from './Icons'


type Techs = {
    icon:string
    title:string
}
interface Props {
    optionsItems:Techs[]
    onChange?: any

}

const SelectOptionTech : FC<Props> = ({optionsItems,onChange}) =>{
    const optionsBox = useRef<HTMLUListElement>(null);
    const [techSelected,setTechSelected] = useState<string>('Select your news')
    const [showSelect,setShowSelect] = useState<boolean>(false)

    const returnIcon = (icon:string) => {
        const i = IconTechsCollection.filter(ic => ic.title === icon)
        
        return i.length !== 0 ? i[0].icon : 'icon not found'
    }

    const onSelected = (e:any,tech:string) =>{
        const elementName = e.target.localName
        if(elementName === 'li' || elementName === 'span' || elementName === 'img' ){
            e.stopPropagation()
        }
        setTechSelected(tech)
        onChange(tech.toLocaleLowerCase())
        optionsBox && optionsBox.current?.classList.add('disappear') 
        optionsBox.current?.addEventListener('animationend',()=>{
            setTimeout(() => {
                setShowSelect(false)
            }, 200);
        })
        
    }
   

    const onShowSelectOptions = (e:any) =>{
        e.target.attributes['data-testid'].value === 'select-button'  && e.stopPropagation()
        setShowSelect(!showSelect)
    }    

    useEffect(()=>{
        const getTechFromStore = localStorage.getItem('news_category')
        setTechSelected(getTechFromStore ? getTechFromStore : 'Select your news')    
        document.addEventListener('click',()=>{
            setShowSelect(false) 
        })
    },[])
    return(
        <div role={'button'} data-testid="select-option-techs"  className={`${Styles.selectOption}`}>
               <button data-testid="select-button" onClick={(e)=>onShowSelectOptions(e)}  className={`${Styles.selectOption__button} d-flex w-full`}>
                    <span>{techSelected}</span>
                    <Icons.ArrowDownIcon  />    
                </button> 
                {
                    showSelect && 
                    <ul ref={optionsBox} className={`${Styles.selectOption__techs} w-full `}>
                    {
                        optionsItems && optionsItems.map((tech:Techs,key)=>(
                            <li onClick={(e)=>onSelected(e,tech.title)} key={key} className={`${Styles.selectOption__techItem} d-flex align-center`}>
                                  <figure className={Styles.selectOption__techItem_icon} >
                                      {returnIcon(tech.title)}
                                 </figure> 
                                   <span className={Styles.selectOption__techItem_text}>{tech.title}</span> 
                                 
                            </li>
                        ))
                    }
                    
                </ul>
                }
              
        </div>
    )
}

export default SelectOptionTech