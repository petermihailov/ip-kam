import React from 'react'
import cn from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

import bg from './background-shapes-nano.svg'

const s = theme => ({
  root: {
    position: 'relative',
  },
  container: {
    maxWidth: theme.breakpoints.values.md,
    margin: 'auto',
    padding: theme.spacing.unit * 2,
    overflow: 'hidden',
  },
  isBanner: {
    padding: `${theme.spacing.unit * 4}px 0`,
    color: '#fff',
    backgroundColor: '#111026',
    backgroundImage: `url(${bg})`,
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
    className={cn(className, classes.root, {
      [classes.container]: !banner,
      [classes.isBanner]: banner,
    })}
    square={banner}
    {...props}
  >
    {banner ? (
      <div className={cn(classes.root, { [classes.container]: banner })}>
        {children}
      </div>
    ) : (
      children
    )}
  </Paper>
)

export default withStyles(s)(Container)
