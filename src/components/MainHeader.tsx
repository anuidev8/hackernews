

//Styles
import Styles from '../styles/Header.module.css'

//Components
import { Icons } from './Icons'




const MainHeader = () =>{
    return(
        <header className={`${Styles.header} content-padding d-flex justify-center  flex-column`}>
            <nav >
                <a href='/'>
                    <Icons.Logo size='1rem' className='logo' />
                </a> 
            </nav>
        </header>
    )
}

export default MainHeader