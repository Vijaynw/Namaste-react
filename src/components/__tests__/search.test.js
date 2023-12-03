import { fireEvent, render, screen } from '@testing-library/react'
import Body from '../Body'
import MOCK_DATA from ".././mocks/mockdata.json"
import { act } from 'react-dom/test-utils'
import { BrowserRouter } from 'react-router-dom'
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

test('should render searh', async () => {
    await act(async ()=>render(
        <BrowserRouter>
     <Body />
     </BrowserRouter>
     ) );
     
     const beforesearch = screen.getAllByTestId("res-cards")
     expect(beforesearch.length).toBe(20)
const screenbtn = screen.getByRole("button",{name:"Search"})
const searchInput = screen.getByTestId("search")

fireEvent.change(searchInput,{target:{value:"burger"}})
fireEvent.click(screenbtn) 

const cards = screen.getAllByTestId("res-cards")

expect(cards.length).toBe(2)
})


test('should filter', async () => {
    await act(async ()=>render(
        <BrowserRouter>
     <Body />
     </BrowserRouter>
     ) );
     
const beforefilter = screen.getAllByTestId("res-cards")
expect(beforefilter.length).toBe(20)
const screenbtnveg = screen.getByRole("button",{name:"Veg Restaurants"})
// const searchInput = screen.getByTestId("search")

// fireEvent.change(searchInput,{target:{value:"burger"}})
fireEvent.click(screenbtnveg) 

const cardsfilter = screen.getAllByTestId("res-cards")

expect(cardsfilter.length).toBe(2)
})
