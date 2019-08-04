import {
  createStore,
  compose
} from 'redux'
import todoApp from './reducers'
const devTools = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
)
const store = createStore(todoApp, devTools)

export default store