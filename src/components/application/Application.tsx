import React from "react"

const Application = () => {
  return (
    <>
      <h1>Job application form</h1>
      <h2>Section 1</h2>
      <p>All field are mandatory</p>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Fullname" />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" name="bio" />
        </div>
        <div>
          {/* <label htmlFor="job-location">Job location</label> */}
          <label htmlFor="job-location">Name</label>
          <select name="job-location" id="job-location">
            <option value="">Select a country</option>
            <option value="US">United state of america</option>
            <option value="UK">United kingdom</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="term" /> I agree to the terms and
            conditions
          </label>
        </div>
        <button>submit</button>
      </form>
    </>
  )
}

export default Application
