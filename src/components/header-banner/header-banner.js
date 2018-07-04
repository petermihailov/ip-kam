import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Container from './../container/container'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

const s = theme => ({
  root: {
    backgroundImage:
      'linear-gradient(160deg, rgb(7, 20, 34) 10%, rgb(11, 32, 56) 80%)',
  },
  divider: {
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    margin: `${theme.spacing.unit * 2}px auto`,
    maxWidth: '66%',
  },
  subheading: {
    maxWidth: theme.breakpoints.values.sm,
    margin: '0 auto',
  },
})

const HeaderBanner = ({ classes, title, description, children }) => (
  <Container className={classes.root} component="section" banner>
    {title ? (
      <Typography color="inherit" align="center" variant="display1">
        {title}
      </Typography>
    ) : null}
    {description ? (
      <Fragment>
        <Divider className={classes.divider}/>
        <Typography
          className={classes.subheading}
          color="inherit"
          align="center"
          variant="subheading"
          component="p"
        >
          {description}
        </Typography>
      </Fragment>
    ) : null}
    {children}
  </Container>
)

export default withStyles(s)(HeaderBanner)
