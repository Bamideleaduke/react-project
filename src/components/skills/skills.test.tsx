import { render, screen } from "@testing-library/react"
import Skills from "./Skills"

describe("Skills", () => {
  const skills = ["HTML", "CSS", "Javascriptw"]
  test("renders correctly", () => {
    render(<Skills skills={skills} />)
    const listElement = screen.getByRole("list")
    expect(listElement).toBeInTheDocument()
  })
  test("renders a list items", () => {
    render(<Skills skills={skills} />)
    const listitemElement = screen.getAllByRole("listitem")
    expect(listitemElement).toHaveLength(skills.length)
  })

  test("renders login button", () => {
    render(<Skills skills={skills} />)
    const btnElement = screen.getByRole("button", { name: "Login" })
    expect(btnElement).toBeInTheDocument()
  })

  test("start learning button is not displayed", () => {
    render(<Skills skills={skills} />)
    const SLbtnElement = screen.queryByRole("button", {
      name: "Start learning",
    })
    expect(SLbtnElement).not.toBeInTheDocument()
  })

  test("start learning button is eventually displayed", async () => {
    render(<Skills skills={skills} />)
    // const view = render(<Skills skills={skills} />);
    // logRoles(view.container);
    //   screen.debug();
    const SLbtnElement = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      { timeout: 2000 },
    )
    //   screen.debug();

    expect(SLbtnElement).toBeInTheDocument()
  })
})
