import { UPDATE_MGB_DATA } from '@/constant'

const initState = {}

const mgState = (state = initState, { type, data }) => {
  switch (type) {
    case UPDATE_MGB_DATA:
      return {
        ...state,
        [data.key]: {
          ...state[data.key],
          ...data.data,
        },
      }
    default:
      return state
  }
}
export default mgState
