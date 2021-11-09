import { UPDATE_MGB_DATA } from '@/constant'

function getDefaultState() {
  return {
    search: '',
    list: [],
    pageIndex: 1,
    total: 0,
    isNeedRecommend: true,
  }
}

const initState = {}

export default (state = initState, { type, data }) => {
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
