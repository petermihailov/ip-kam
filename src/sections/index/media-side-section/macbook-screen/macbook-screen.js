import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import frame from './macbook-frame.png'
import video from './macbook-CCTV-screen.jpg'

const styles = theme => ({
  wrapper: {
    position: 'relative',
  },
  video: {
    position: 'absolute',
    top: '7%',
    left: '17%',
    width: '66%',
    height: '77%',
  },
  macbookFrame: {
    display: 'block',
    position: 'relative'
  },
})

const MacbookScreen = ({ classes }) => (
  <div className={classes.wrapper}>
    <img className={classes.video} src={video} alt="" />
    <img className={classes.macbookFrame} src={frame} alt="" />
  </div>
)

export default withStyles(styles)(MacbookScreen)
