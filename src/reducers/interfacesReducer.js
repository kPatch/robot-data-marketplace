import _ from 'lodash'
import {
  ADD_INTERFACE,
  REMOVE_INTERFACE
} from '../actions/types'

const INITIAL_STATE = {
  interfaceList: [
    {
      interfaceName: "NetSuit",
      interfaceDescription: "Telepresence suit equipped with motion sensors and vitals monitoring",
      interfaceId: "0x89783hjkjlew38"
    },
    {
      interfaceName: "X-Gloves",
      interfaceDescription: "Haptic telepresence control gloves developed by SyntheticIndustries",
      interfaceId: "0x2jn2l3kfaml"
    }
  ]
}

export default(state=INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_INTERFACE:
      return {
        ...state,
        'peersList': state.peersList.push(action.payload)
      }
    case REMOVE_INTERFACE:
      return _.omit(state, action.payload.address)
    default:
      return state
  }
}