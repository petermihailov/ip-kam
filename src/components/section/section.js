import React from 'react'
import cn from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const s = theme => ({
  section: {
    padding: theme.spacing.unit * 2,
  },
  isBanner: {
    color: '#fff',
    background: 'linear-gradient(140deg, rgb(7, 20, 34), rgb(43, 73, 104))',
  },
})

const Section = ({ classes, children, banner = false, ...props }) => (
  <Paper
    component="section"
    elevation={0}
    square
    className={cn(classes.section, { [classes.isBanner]: banner })}
    {...props}
  >
    {children}
  </Paper>
)

export default withStyles(s)(Section)
