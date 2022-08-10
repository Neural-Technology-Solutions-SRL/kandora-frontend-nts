import React, { useState } from "react"
import { FaPlusCircle } from "react-icons/fa"
import { IconContext } from "react-icons"


const InputTodo = props => {
  const [title, setTitle] = useState("")

  const onChange = e => {
    setTitle(e.target.value)
  }

  const handleSubmit = e => {e.preventDefault()
    if (title.trim()) {
      props.addTodoProps(title)
      setTitle("")} 
    else {
      alert("Please write item")
    }
  }

  <IconContext.Provider
  value={{
    color: "darkcyan",
    style: { fontSize: "20px", color: "#ff0000" },
    className: "submit-iconn",
  }}
>
  <button className="input-submit">
    <FaPlusCircle />
    <FaPlusCircle />
    <FaPlusCircle />
  </button>
</IconContext.Provider>

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={title}
        name="title"
        onChange={onChange}
      />
    <button className="input-submit"><FaPlusCircle style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }} />
    </button>
    </form>
  )
}

export default InputTodo