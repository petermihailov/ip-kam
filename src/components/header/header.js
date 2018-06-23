import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import s from './header-styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MobileMenu from '../mobile-menu/mobile-menu'
import Logo from '../logo/logo'

const Header = ({ classes }) => (
  <AppBar position="sticky" color="default">
    <Toolbar className={classes.toolbar}>
      <Logo />
      <MobileMenu />
    </Toolbar>
  </AppBar>
)

export default withStyles(s)(Header)
