import { fireEvent, getAllByTestId, render } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import Menu from "../Menu"
import { BrowserRouter } from "react-router-dom"
import appSore from "../../utils/appStore"
import Provider from "react-redux"
global.fetch =jest.fn(()=>{
    return Promise.resolve({
        json: ()=> Promise.resolve(MOCK_DAT)
    })
})

test('should load menu component',async () => {
  await act(async()=> render(
    <BrowserRouter>
    <Provider store={appSore}>
    <Menu/>
    </Provider>
    </BrowserRouter>
  ))
  const accordian = scren.getByText("Recommended")
  fireEvent.click(accordian)
  //add data-testid
  // expect(getAllByTestId items)

  // add btn getallby
  // header render
})
