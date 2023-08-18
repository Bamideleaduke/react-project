import { render, screen } from "@testing-library/react"
import Application from "./Application"

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />)
    //   textbox
    const nameElement = screen.getByRole("textbox", { name: "Name" })
    expect(nameElement).toBeInTheDocument()
    //   for the select label
    const nameElement2 = screen.getByLabelText("Name", { selector: "input" })
    expect(nameElement2).toBeInTheDocument()
    //   for the select label
    const nameElement3 = screen.getByPlaceholderText("Fullname")
    expect(nameElement3).toBeInTheDocument()

    const bioElement = screen.getByRole("textbox", { name: "Bio" })
    expect(bioElement).toBeInTheDocument()

    //   heading h1,h2 ...
    const headingElement = screen.getByRole("heading", {
      level: 1,
    })
    expect(headingElement).toBeInTheDocument()

    const sectionHeading = screen.getByRole("heading", {
      level: 2,
    })
    expect(sectionHeading).toBeInTheDocument()
    //   paragraph
    // const sectionParagraph = screen.getByText("mandatory", { exact: false });
    // const sectionParagraph = screen.getByText(/Mandatory$/i, { exact: false });
    const sectionParagraph = screen.getByText((e) => e.endsWith("mandatory"))
    expect(sectionParagraph).toBeInTheDocument()

    //   select
    const jobLocation = screen.getByRole("combobox")
    expect(jobLocation).toBeInTheDocument()

    //   checkbox
    const checkBox = screen.getByRole("checkbox")
    expect(checkBox).toBeInTheDocument()

    const checkBox2 = screen.getByLabelText(
      "I agree to the terms and conditions",
    )
    expect(checkBox2).toBeInTheDocument()

    //   button
    const submitBtn = screen.getByRole("button")
    expect(submitBtn).toBeInTheDocument()
    expect(submitBtn).toBeDisabled()
  })
})
