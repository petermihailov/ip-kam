import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import withWidth from '@material-ui/core/withWidth'
import Link from 'gatsby-link'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import s from './header-styles'

import { phones } from '../../../data/contacts'
import pages from '../../../data/pages'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MobileMenu from '../mobile-menu/mobile-menu'
import Logo from '../logo/logo'

const Header = ({ classes, width, location}) => (
  <AppBar position="sticky" color="default">
    <Toolbar className={classes.toolbar}>
      <Logo/>
      {
        ['xs', 'sm'].includes(width) ? (
          <MobileMenu/>
        ) : (
          <Tabs value={pages.map(({route}) => route).indexOf(location)}>
            {pages.map(({ label, route }, idx) => (
              <Tab key={idx} label={label} component={Link} to={route}/>
            ))}
          </Tabs>
        )
      }
    </Toolbar>
  </AppBar>
)

export default withStyles(s)(withWidth()(Header))
