import React from 'react'
import Link from 'gatsby-link'
import { withStyles } from '@material-ui/core/styles'
import { phones } from '../../../data/contacts'
import pages from '../../../data/pages'
import s from './mobile-menu-styles'

import IconButton from '@material-ui/core/IconButton'
import CallIcon from '@material-ui/icons/Call'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

class MobileMenu extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    })
  }

  render() {
    const { classes } = this.props

    const sideList = (
      <div className={classes.list}>
        <List aria-label="Phones">
          {phones.map((item, idx) => (
            <ListItem
              key={'phones' + idx}
              component="a"
              href={'tel:' + item.value}
              button
            >
              <ListItemIcon>
                <CallIcon />
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>

        <Divider />

        <List component="nav">
          {pages.map((item, idx) => (
            <ListItem key={idx} component={Link} to={item.route} button>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </div>
    )

    return (
      <div>
        <IconButton
          color="inherit"
          aria-label="Menu"
          onClick={this.toggleDrawer('right', true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer('right', false)}
        >
          <div
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    )
  }
}

export default withStyles(s)(MobileMenu)
