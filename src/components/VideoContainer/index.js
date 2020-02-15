import React, { Component } from 'react'
import PropTypes from 'prop-types'

class VideoContainer extends Component {
  constructor(props) {
    super(props)
  }


  componentDidMount() {
    const video = this.videoRef

    video.addEventListener('loadedmetadata', (e) => {
      // video.currentTime = 180
    }, false)

    video.addEventListener('canplay', (e) => {
      video.play()
    }, false)

    // video.addEventListener('ended', (e) => { 
    //   console.log('SRC: ' + this.src) 
    //   video.src = audio.src + '?next=true'
    //   video.load()
    //   video.currentTime = 0
    //   video.play()
    // }, false)
  }
  render() {
    return(
      <div>
        {/* <video 
          id= {this.props.videoId}
          ref= {(ref) => { this.videoRef = ref }}
          src= {this.props.src}
          controls /> */}
        <img 
          id= {this.props.videoId}
          ref= {(ref) => { this.videoRef = ref }}
          src= {this.props.src}
          width= {500}
          height= {300}
          controls />
      </div>
    )
  }
}

VideoContainer.defaultProps = {
  id: '',
  src: null,
  autoPlay: false,
  controls: false,
  loop: false,
}

VideoContainer.propTypes = {
  id: PropTypes.string,
  src: PropTypes.string,
  autoPlay: PropTypes.bool,
  controls: PropTypes.bool,
  loop: PropTypes.bool
}

export default VideoContainer