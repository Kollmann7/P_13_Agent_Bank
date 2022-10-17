import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from '../features/userSlice'
import { HYDRATE } from 'next-redux-wrapper'

export default configureStore({
  reducer: {
    user: userSlice.reducer
  }
})

// const masterReducer = (state, action) => {
//   if(action.type === HYDRATE) {
//     const nextState = {
//       ...state,
//       counter: {
//         user: state.counter.user + action.payload.counter.user,
//       }
//     }
//     return nextState
//   } else {
//     return configureStore
//   }
// }

// export const wrapper = createWrapper()