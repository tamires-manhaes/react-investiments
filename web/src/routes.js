import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import Investiment from './components/Investiment'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/investment/:inventmentId" exact component={Investiment} />
      </Switch>
    </BrowserRouter>
  )
}

