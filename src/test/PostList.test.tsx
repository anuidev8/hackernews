import react from 'react'
import { render, waitFor } from '@testing-library/react'


//SERVER SETUP
import { rest } from "msw"
import {setupServer } from 'msw/node'

import { apiUrl } from '../utils/apiUrl'

//COMPONENTS
import PostList from '../components/PostList'

const server = setupServer(
    rest.get(apiUrl,(req,res,ctx)=>{
        console.log(res);
        
        return res(ctx.json({state:true}))
    })
)

beforeAll(()=>server.listen())
afterEach(()=>server.resetHandlers())
afterAll(()=>server.close())

describe('posts list',()=>{
    it('should fetch and bring the last posts',async()=>{
            const wrapper =  render(<PostList />)

            const loading = await waitFor(()=>wrapper.getByTestId('loading'))

            expect(loading).toBeUndefined()

            const postContainer = await waitFor(()=>wrapper.findByTestId('.posts-List-container'))
            expect(postContainer).toBeInTheDocument()
            
            const selectOptionTechs = wrapper.findByTestId('select-option-techs')
            expect(selectOptionTechs).toBeInTheDocument()
            
    })
})