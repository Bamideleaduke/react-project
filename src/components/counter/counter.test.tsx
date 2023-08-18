import { render, screen } from "@testing-library/react"
import Counter from "./Counter"
import user from "@testing-library/user-event"

// describe("Counter", () => {
//   test("renders correctlyo", () => {
//     render(<Counter />);

//     const headingElement = screen.getByRole("heading");
//     expect(headingElement).toBeInTheDocument();

//     const increaseBtn = screen.getByRole("button", { name: "Increment" });
//     expect(increaseBtn).toBeInTheDocument();
//   });
//   test("renders a count from 0", () => {
//     render(<Counter />);

//     const countElement = screen.getByRole("heading");
//     expect(countElement).toHaveTextContent("0");
//   });

//   test("renders a count of 1 after clicking the btn", async () => {
//     user.setup();
//     render(<Counter />);

//     const increamentBtn = screen.getByRole("button", { name: "Increment" });
//     //   await act(async () => await user.click(increamentBtn));
//     //   double click
//     //   await act(async () => await user.dblClick(increamentBtn));
//     await act(async () => await user.tripleClick(increamentBtn));

//     const countElement = screen.getByRole("heading");
//     expect(countElement).toHaveTextContent("3");
//   });
// });

describe("Counter2 => Jest Mocking functions", () => {
  test("renders correctly", () => {
    render(<Counter count={0} />)

    const headingElement = screen.getByText("Counter two")
    expect(headingElement).toBeInTheDocument()
  })

  test("handlers are called", async () => {
    user.setup()
    const incrementHandler = jest.fn()
    const decrementHandler = jest.fn()
    render(
      <Counter
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />,
    )
    const incrementBtn = screen.getByRole("button", { name: "Increment" })
    const decrementBtn = screen.getByRole("button", { name: "Decrement" })
    await user.click(incrementBtn)
    await user.click(decrementBtn)

    expect(incrementHandler).toHaveBeenCalledTimes(1)
    expect(decrementHandler).toHaveBeenCalledTimes(1)
  })

  // test("renders a count of 1 after clicking the btn", async () => {
  //   user.setup();
  //   render(<Counter />);

  //   const increamentBtn = screen.getByRole("button", { name: "Increment" });
  //   //   await act(async () => await user.click(increamentBtn));
  //   //   double click
  //   //   await act(async () => await user.dblClick(increamentBtn));
  //   await act(async () => await user.tripleClick(increamentBtn));

  //   const countElement = screen.getByRole("heading");
  //   expect(countElement).toHaveTextContent("3");
  // });
})
