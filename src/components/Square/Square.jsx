import './Square.scss'

export function Square(props) {
  let classColor = 'square--x'

  if (props.value === 'O') {
    classColor = 'square--o'
  }

  return (
    <button className={`square ${classColor}`} onClick={props.onClick}>
      {props.value}
    </button>
  )
}
