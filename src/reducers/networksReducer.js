import _ from 'lodash'
import {
  ADD_NETWORK,
  REMOVE_NETWORK
} from '../actions/types'

const INITIAL_STATE = {
  networkList: [
    {
      address: "0xjl149jjkjkljs25",
      bootnodes: [
        {
          "address": "0xbsjksfa",
          "ip": "109.240.75.523"
        }
      ]
    },
    {
      address: "0x87jhk2kfsa8967",
      bootnodes: [
        {
          "address": "0x298hjfhlk3j2",
          "ip": "273.887.23.278"
        }
      ]
    }
  ]
}

export default(state=INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_NETWORK:
      return {
        ...state,
        'networkList': state.networkList.push(action.payload)
      }
    case REMOVE_NETWORK:
      return _.omit(state, action.payload.address)
    default:
      return state
  }
}