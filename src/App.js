import {Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import NotFound from './components/NotFound'

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contacts" component={Contacts} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
