import { FC } from "react"

import { NavLink } from 'react-router-dom'

//styles
import Styles from '../styles/Tabs.module.css'


type TabItem = {
    title:string
    link:string
}

interface Props{
    tabItems:TabItem[]
}

const Tabs: FC<Props> = ({tabItems}) =>{

    
    return(
        <nav className={`${Styles.tabs}`}>
            <ul className="d-flex justify-center">
                {
                    tabItems && tabItems.map((tabItem:TabItem,key)=>(
                      
                         <NavLink
                         className={`${Styles.tab__item} d-flex justify-center align-center`}
                            key={key}
                          style={({ isActive }) => {
                            return {
                              borderColor:`${isActive ? '#1797ff' : '#d6d6d6'}`,  
                          
                              color: isActive ? "#1797ff" : "#606060",
                            };
                          }}
                            to={`${tabItem.link}`}
                    
                        >
                            {tabItem.title}
                        </NavLink>
                      
                    ))
                  
                       
                }
            </ul>
        </nav>
    )
}

export default Tabs