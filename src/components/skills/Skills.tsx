import { useState, useEffect } from "react"
import { skillProps } from "./skills.types"

const Skills = ({ skills }: skillProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true)
    }, 1001)
  }, [])
  return (
    <div>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>
        })}
      </ul>
      {isLoggedIn ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  )
}

export default Skills
