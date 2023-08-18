import { GreetProps } from "./greet.types"

const Greet = ({ name }: GreetProps) => {
  return <div>hello {name ? name : "Guest"}</div>
}

export default Greet
