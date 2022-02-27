import react from 'react'
import { render,cleanup, waitFor,fireEvent} from '@testing-library/react'


import  SelectOptionTech from '../components/SelectOptionTech'

describe('Post component', ()=>{

    const selectOptions = [
        {icon:'angular',title:'Angular'},
        {icon:'react',title:'React'},
        {icon:'vue',title:'Vue'},
    ]
 
    let mainWrapper : any

    beforeEach(()=>{
        mainWrapper = render(<SelectOptionTech optionsItems={[{icon:'react.icon',title:'react'}]} />)
    })

    //FIND ALL POST-CARD HTML ELEMENTS 
    it('should rendering the elements for paint all elements of the select',()=>{
        const selectClassStyle = 'selectOption'
        const elements = [
                `div[role="button"].${selectClassStyle}`,
                `button.${selectClassStyle}__button`,
                `button.${selectClassStyle}__button span`,    

        ]
        elements.forEach(element=>{
            const elementByTag = mainWrapper.container.querySelector(`${element}`) 
            expect(elementByTag).toBeTruthy()
        })
    })
    
    //ACTIONS
    it('should call onChange when the option is selected', async()=>{
        const selectClassStyle = 'selectOption'
        const onSendWavesMock = jest.fn();
    render(
      <SelectOptionTech 
        optionsItems={selectOptions}
        onChange={onSendWavesMock} />
    );
     
            
        const SelectButton = mainWrapper.container.querySelector('button')
        fireEvent.click(SelectButton)

        const techsOptions = mainWrapper.container.querySelector('.selectOption__techs')
        await waitFor(()=>techsOptions)
        
        expect(techsOptions).toBeInTheDocument()
        const elements = [
            `li.${selectClassStyle}__techItem`,
            `li.${selectClassStyle}__techItem figure.${selectClassStyle}__techItem_icon`,
            `li.${selectClassStyle}__techItem span.${selectClassStyle}__techItem_text`,

    ]
    elements.forEach(element=>{
        const elementByTag = mainWrapper.container.querySelector(`${element}`) 
        expect(elementByTag).toBeTruthy()
    })


    expect(mainWrapper.getByText('Angular')).toBeInTheDocument()
  
    })

    afterAll(cleanup)
})