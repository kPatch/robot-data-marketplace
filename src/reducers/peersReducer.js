import _ from 'lodash'
import {
  ADD_PEER,
  REMOVE_PEER
} from '../actions/types'

const INITIAL_STATE = {
  peersList: [
    {
      address: "0xjl149jjkjkljs25",
      username: "alice1"
    },
    {
      address: "0x2jn2l3kfaml",
      username: "bob2"
    }
  ]
}

export default(state=INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_PEER:
      return {
        ...state,
        'peersList': state.peersList.push(action.payload)
      }
    case REMOVE_PEER:
      return _.omit(state, action.payload.address)
    default:
      return state
  }
}