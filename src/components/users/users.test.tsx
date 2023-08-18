import { render, screen } from "@testing-library/react"
import Users from "./Users"
import { server } from "../../mocks/server"
import { rest } from "msw"

describe("Users", () => {
  test("renders correctly", () => {
    render(<Users />)

    const userElement = screen.getByText("Users")
    expect(userElement).toBeInTheDocument()
  })
  test("renders a list of users", async () => {
    render(<Users />)

    const userElement = await screen.findAllByRole("listitem")
    expect(userElement).toHaveLength(3)
  })

  test("renders error", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.come/users",
        (req, res, ctx) => {
          return res(ctx.status(500))
        },
      ),
    )
    render(<Users />)

    const error = await screen.findByText(/Error fetching users/)
    expect(error).toBeInTheDocument()
  })
})
