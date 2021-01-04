class Todo {
  constructor(configuration) {
    this.text = configuration.tex || 'New TODO'
    this.checked = false
  }

  render() {
    return (
      <li>
        <input type="checkbox" checked={this.checked}/>
        <span>{this.text}</span>
      </li>
    )
  }
}
