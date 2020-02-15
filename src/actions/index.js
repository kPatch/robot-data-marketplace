export const addPeer = () => (dispatch) => {
  dispatch({ type: ADD_PEER })
}

export const removePeer = () => (dispatch) => {
  dispatch({ type: REMOVE_PEER })
}

export const removeAllPeers = () => (dispatch) => {
  dispatch({ type: REMOVE_ALL_PEERS })
}

export const addNetwork = () => (dispatch) => {
  dispatch({ type: ADD_NETWORK })
}

export const removeNetwork = () => (dispatch) => {
  dispatch({ type: REMOVE_NETWORK })
}

export const removeAllNetworks = () => (dispatch) => {
  dispatch({ type: REMOVE_ALL_NETWORKS })
}

export const createNetwork = () => (dispatch) => {
  dispatch({ type: CREATE_NEW_NETWORK })
}
