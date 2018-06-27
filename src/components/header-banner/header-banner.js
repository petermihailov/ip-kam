import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const s = theme => ({
  root: {
    padding: theme.spacing.unit * 4,
    textAlign: 'center',
    color: '#fff',
    backgroundImage:
      'linear-gradient(160deg, rgb(7, 20, 34) 10%, rgb(11, 32, 56) 80%)',
    overflow: 'hidden',
  },
})

const HeaderBanner = ({ classes, title, description, children }) => (
  <div className={classes.root}>
    {title ? (
      <Typography color="inherit" variant="display1">
        {title}
      </Typography>
    ) : null}
    {description ? (
      <Typography color="inherit" paragraph>
        {description}
      </Typography>
    ) : null}
    {children}
  </div>
)

export default withStyles(s)(HeaderBanner)
