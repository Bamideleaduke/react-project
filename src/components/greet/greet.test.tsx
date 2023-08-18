import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

describe("Greet", () => {
  test("Greet renders correctly", () => {
    render(<Greet />)
    const textElement = screen.getByText(/Hello/i)
    expect(textElement).toBeInTheDocument()
  })
  describe.skip("Nested", () => {
    test("Greet renders with a name", () => {
      render(<Greet name="Temi" />)
      const textElement = screen.getByText(/Hello temi/i)
      expect(textElement).toBeInTheDocument()
    })
  })
})
// describe("Nested2", () => {
//   test("Greet renders with a name", () => {
//     render(<Greet name="Temi" />);
//     const textElement = screen.getByText(/Temi/i);
//     expect(textElement).toBeInTheDocument();
//   });
// });
