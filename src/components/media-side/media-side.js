import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const s = theme => ({
  container: {
    [theme.breakpoints.up('sm')]: {
      marginTop: 64,
    },
  },
})

const MediaSide = ({ classes, Media, Text, ...props }) => (
  <div className={classes.container} {...props}>
    <div>{Media}</div>
    {Text}
  </div>
)

export default withStyles(s)(MediaSide)
