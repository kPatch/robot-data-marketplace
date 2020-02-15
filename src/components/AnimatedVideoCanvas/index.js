import React, { Component } from 'react'
import VideoCanvas from '../VideoCanvas'

class AnimatedVideoCanvas extends Component {

  constructor(props) {
    super(props)
    this.state = { refreshRate: 10, angle: 0 } // 10Hz
    this.updateAnimationState = this.updateAnimationState.bind(this)

  }

  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimationState)
  }

  updateAnimationState() {
    this.setState(prevState => ({angle: prevState.angle + 1 }))
    // if((currentTime - lastTime) < FRAME_PERIOD) {
      this.rAF = requestAnimationFrame(this.updateAnimationState)
    // }
    // lastTime = currentTime
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF)
  }

  render() {
    return(
      <VideoCanvas
        angle={this.state.angle}
        src={this.props.src}
        width={this.props.width} 
        height={this.props.height} />
    )
  }
}

export default AnimatedVideoCanvas