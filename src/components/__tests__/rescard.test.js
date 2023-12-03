import { render, screen } from "@testing-library/react"
import Restrocard from "../Restrocard"
import MOCK_DATA from "../mocks/rescard.json"
import "@testing-library/jest-dom"
test('should ', () => {
   render(<Restrocard resData={MOCK_DATA}/>)

   const name =screen.getByText("Theobroma")
   expect(name).toBeInTheDocument()
})


//HOC testing
