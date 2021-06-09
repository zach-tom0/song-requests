function Button(props) {
    const submit = <button className="App-Button"
    onClick={props.onClick}>
    Request a Song
    </button>
    return submit
  }

export default Button;
