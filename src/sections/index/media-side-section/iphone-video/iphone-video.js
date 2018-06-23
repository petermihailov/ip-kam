import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import frame from './iphone-x-frame.png'
import video from './video.gif'

const styles = theme => ({
  wrapper: {
    position: 'relative',
  },
  video: {
    position: 'absolute',
    zIndex: -1,
    top: '5%',
    left: '3%',
    width: '94%',
    height: '90%',
  },
  iPhoneFrame: {
    display: 'block',
  },
})

const IphoneVideo = ({ classes }) => (
  <div className={classes.wrapper}>
    <img className={classes.video} src={video} alt="" />
    <img className={classes.iPhoneFrame} src={frame} alt="" />
  </div>
)

export default withStyles(styles)(IphoneVideo)
