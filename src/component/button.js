function Button(props) {
    const submit = <button className="App-Button"
    onClick={props.onClick}>
    {props.value}
    </button>
    return submit
  }

export default Button;
