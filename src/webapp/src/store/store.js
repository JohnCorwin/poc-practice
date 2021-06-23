import rootReducer from '../reducers/rootReducer'
import thunkMiddleware from 'redux-thunk'
import { applyMiddleware, createStore, compose } from 'redux'

const middlewareEnhancer = applyMiddleware(thunkMiddleware)
const composedEnhancers = compose(middlewareEnhancer)

const store = createStore(rootReducer, undefined, composedEnhancers)

export default store