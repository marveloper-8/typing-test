// styling
import * as STYLE from 'styles/App'
// containers
import Test from "container/Test";

const App = () => {
  return (
    <STYLE.App>
      <STYLE.Container>
        <Test />
      </STYLE.Container>
    </STYLE.App>
  )
}

export default App;
