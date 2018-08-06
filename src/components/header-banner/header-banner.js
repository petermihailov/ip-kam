import React, { Fragment } from 'react'
import cn from 'classnames'
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles,
} from '@material-ui/core/styles'
import Container from './../container/container'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

import bgImg from './proto-background-nuanced.svg'
import edgeImg from './round-edge.svg'

import primary from '@material-ui/core/colors/deepOrange'
import secondary from '@material-ui/core/colors/blueGrey'

const theme = createMuiTheme({
  palette: {
    primary,
    secondary,
    type: 'dark',
  },
})

const s = theme => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
  },
  banner: {
    display: 'flex',
    paddingBottom: '5%',
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
    pointerEvents: 'none',
    userSelect: 'none',
  },
})

const HeaderBanner = ({ className, classes, title, description, children }) => (
  <MuiThemeProvider theme={theme}>
    <section className={classes.root}>
      <Container className={cn(classes.banner, className)} banner>
        {title ? (
          <Typography
            color="inherit"
            align="center"
            variant="display1"
            gutterBottom
          >
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
      <img className={classes.roundEdge} src={edgeImg} alt=""/>
    </section>
  </MuiThemeProvider>
)

export default withStyles(s)(HeaderBanner)
