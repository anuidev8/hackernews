import react from 'react'
import { render,cleanup,fireEvent, waitFor} from '@testing-library/react'

import  SelectOptionTech from '../components/SelectOptionTech'

describe('Post component', ()=>{

    const selectOptions = [
        {icon:'react',title:'react'},
        {icon:'vue',title:'vue'},
        {icon:'vue',title:'angular'},
    ]
 
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
  /*   it('should call onChange when the option is selected', async()=>{
            const mockedOnchange = jest.fn()
            render(<SelectOptionTech onChange={ mockedOnchange} optionsItems={selectOptions} />)
            
            const SelectButton = mainWrapper.container.querySelector('button')
            fireEvent.click(SelectButton)

            const techsOptions = mainWrapper.container.querySelector('.selectOption__techs--show')
            await waitFor(()=>techsOptions)   
            fireEvent.click(techsOptions)

            expect(mockedOnchange).toHaveBeenCalledTimes(1)

            


    }) */

    afterAll(cleanup)
})