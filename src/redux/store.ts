import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware()]
})

if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./rootReducer', () => store.replaceReducer(rootReducer))
  }

export default store