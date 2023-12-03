import { render, screen } from "@testing-library/react"
import Contacts from "../Contacts"
import "@testing-library/jest-dom"

describe('Contact', () => {
 beforeAll(()=>{
  console.log("Before All")
 }) 
 beforeEach(()=>{
  console.log("Before Each")
 }) 
 
test('should load contact', () => {
    render(<Contacts/>)
  
  
      const heading = screen.getByRole("heading")
      expect(heading).toBeInTheDocument()
  
  })
  it('should load contact', () => {
    render(<Contacts/>)
  
  
      const button = screen.getByText("Submit")
      expect(button).toBeInTheDocument()
  
  })
  test('should load contact', () => {
    render(<Contacts/>)
  
  
      const palceholder = screen.getByPlaceholderText("name")
      expect(palceholder).toBeInTheDocument()
  
  })
  test('should load contact', () => {
    render(<Contacts/>)
  
  
      const inputBoxes = screen.getAllByRole("textbox")
      expect(inputBoxes.length).not .toBe(3)
  
  })
  
})
