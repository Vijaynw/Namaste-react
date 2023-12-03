import { render, screen } from "@testing-library/react"
import Header from "../Header"
import {Provider} from "react-redux"
import appStore from "../../utils/appStore"
import { Link,BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
test('should render header', () => {
    
    render(
        <BrowserRouter>
      <Provider store={appStore}>
    <Header/>
    </Provider>
        </BrowserRouter>
    )

    const button =screen.getByRole("button")

    expect(button).toBeInTheDocument()

})
test('should render header', () => {
    
    render(
        <BrowserRouter>
      <Provider store={appStore}>
    <Header/>
    </Provider>
        </BrowserRouter>
    )

    const cart =screen.getByText(/Cart/)

    expect(cart).toBeInTheDocument()

})
