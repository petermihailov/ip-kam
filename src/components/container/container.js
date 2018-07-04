import React from 'react'
import cn from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const s = theme => ({
  root: {
    position: 'relative',
    maxWidth: theme.breakpoints.values.md,
    margin: '0 auto',
    padding: theme.spacing.unit * 2,
  },
  isBanner: {
    color: '#fff',
    background: 'linear-gradient(140deg, rgb(7, 20, 34), rgb(43, 73, 104))',
  },
})

const Container = ({
  classes,
  className,
  component,
  elevation = 0,
  children,
  banner,
  ...props
}) => (
  <Paper
    component={component}
    elevation={elevation}
    className={cn(className, classes.root, { [classes.isBanner]: banner })}
    {...props}
  >
    {children}
  </Paper>
)

export default withStyles(s)(Container)
