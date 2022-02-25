import react from 'react'
import { render,cleanup } from '@testing-library/react'

import  SelectOptionTech from '../components/SelectOptionTech'

describe('PostCard component', ()=>{

 /*    const selectOptions = [
        {icon:'react',t}
    ]
 */
    let mainWrapper : any

    beforeEach(()=>{
        mainWrapper = render(<SelectOptionTech optionsItems={[{icon:'react.icon',title:'react'}]} />)
    })

    //FIND ALL POST-CARD HTML ELEMENTS 
    it('should rendering the elements for paint all elements of the select',()=>{
        const selectClassStyle = 'selectOption'
        const elements = [
                `div[role="select"].${selectClassStyle}`,
                `${selectClassStyle} button.${selectClassStyle}__button`,
                `${selectClassStyle} button.${selectClassStyle}__button span`,
                `${selectClassStyle} ul.${selectClassStyle}__techs li.${selectClassStyle}__techItem`,
                `${selectClassStyle} ul.${selectClassStyle}__techs li.${selectClassStyle}__techItem figure.${selectClassStyle}__techItem-icon`,
                `${selectClassStyle} ul.${selectClassStyle}__techs li.${selectClassStyle}__techItem figure.${selectClassStyle}__techItem-text`,
                

        ]
        elements.forEach(element=>{
            const elementByTag = mainWrapper.container.querySelector(`${element}`) 
            expect(elementByTag).toBeTruthy()
        })
    })
    
    //ACTIONS
  

    afterAll(cleanup)
})