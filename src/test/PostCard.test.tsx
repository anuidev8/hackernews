import react from 'react'
import { render,cleanup,fireEvent,waitFor } from '@testing-library/react'

import PostCard from '../components/PostCard'

describe('PostCard component', ()=>{
    let mainWrapper : any

    const post = {
        author:'Jhoe Doe',
        story_title:'post title',
        story_url:"post.url",
        created_at:"3hr ago"
    }
    beforeEach(()=>{
        mainWrapper = render(<PostCard />)
    })

    //FIND ALL POST-CARD HTML ELEMENTS 
    it('should rendering the elements for paint all elements of the post',()=>{
        const postClassStyle = 'postCard'
        const elements = [
                `article.${postClassStyle}`,
                `.${postClassStyle}__header figure svg`,
                `.${postClassStyle}__header span`,
                `p.${postClassStyle}__content`,
                `.${postClassStyle}__actions button`,
                `.${postClassStyle}__actions button figure`,

        ]
        elements.forEach(element=>{
            const elementByTag = mainWrapper.container.querySelector(`${element}`) 
            expect(elementByTag).toBeTruthy()
        })
    })
    
    //ACTIONS
    it('should add the post to faves posts when user click on the like button',async()=>{
        const onSendWavesMock = jest.fn();
        render(
            <PostCard onSetPost={onSendWavesMock} />
        )
        
        fireEvent.click(mainWrapper.container.querySelector('.postCard__button'))
          
        const faveIconButton = mainWrapper.container.querySelector('.postCard__actions_icon_fill')
        await waitFor(()=>faveIconButton)   
        expect(faveIconButton).toBeInTheDocument()



    })

    it('should rendering the correct props',()=>{
           const {getByText,getByTestId} =  render(<PostCard {...post} />)
            expect(getByText(post.author)).toBeInTheDocument()
            expect(getByText(post.created_at)).toBeInTheDocument()
            expect(getByText(post.story_title)).toBeInTheDocument()
            expect(getByTestId(post.story_url)).toBeInTheDocument()
        
    })

    afterAll(cleanup)
})