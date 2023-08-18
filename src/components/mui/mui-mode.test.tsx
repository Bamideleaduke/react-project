import { render, screen } from "../../test-utils"
// custom render function in test-utils
import MuiMode from "./MuiMode"
// import AppProviders from "../providers/app-providers";

describe("MuiMode", () => {
  test("renders test correctly", () => {
    render(<MuiMode />)
    // render(<MuiMode />, { wrapper: AppProviders });
    const headingElement = screen.getByRole("heading")
    expect(headingElement).toHaveTextContent("dark mode")
  })
})
