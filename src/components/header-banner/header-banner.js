import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Container from './../container/container'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

import bgImg from './proto-background-nuanced.svg'
import edgeImg from './round-edge.svg'

const s = theme => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
  },
  banner: {
    display: 'flex',
    paddingBottom: 150,
    backgroundColor: '#111026',
    backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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
  roundEdge: {
    position: 'absolute',
    minWidth: 'calc(100% + 20px)',
    left: -10,
    right: -10,
    bottom: -1,
  },
  [theme.breakpoints.up('sm')]: {
    banner: {
      minHeight: 'calc(45vh - 61px)',
    },
  },
})

const HeaderBanner = ({ classes, title, description, children }) => (
  <section className={classes.root}>
    <Container className={classes.banner} banner>
      {title ? (
        <Typography color="inherit" align="center" variant="display1">
          {title}
        </Typography>
      ) : null}
      {description ? (
        <Fragment>
          <Divider className={classes.divider} />
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
    <img className={classes.roundEdge} src={edgeImg} alt="" />
  </section>
)

export default withStyles(s)(HeaderBanner)
