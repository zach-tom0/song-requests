function Input(props) {
    return (
      <input className="App-input"
    name={props.name}
    value={props.value}
    placeholder={props.placeholder}
    onChange={props.onChange}></input>
  )
}

export default Input;
