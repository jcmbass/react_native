// assume createElement() exists, similar in abstraction to document.
createElement()

const string = ['E', 'A', 'D', 'G', 'B', 'E;']

function Guitar() {
  return (
    <Guitar>
      {strings.map(note => <String note={note} />)}
    </Guitar>
  )
}
