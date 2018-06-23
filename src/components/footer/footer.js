import React from 'react'
import Link from 'gatsby-link'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import PaymentSystems from './../payment-systems/payment-systems'

import CallIcon from '@material-ui/icons/Call'

import { phones } from './../../../data/contacts'

const s = theme => ({
  footer: {
    padding: theme.spacing.unit * 2,
    color: '#fff',
    backgroundImage:
      'linear-gradient(160deg, rgb(7, 20, 34) 10%, rgb(11, 32, 56) 80%)',
  },
})

const Header = ({ classes }) => (
  <footer className={classes.footer}>
    <Grid container>
      <Grid item xs={12} sm={6}>
        <PaymentSystems />
      </Grid>
      <Grid item xs={12} sm={6}>
        <List>
          {phones.map((item, idx) => (
            <ListItem key={idx} component="a" href={'tel:' + item.value} button>
              <CallIcon />
              <ListItemText primary={item.label} disableTypography />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="body1" gutterBottom color="inherit">
          © IP-Кам
        </Typography>
        <Typography variant="caption" color="inherit">
          <address>115409, Россия, Москва, Каширское ш., 50 корпус 2А</address>
        </Typography>
      </Grid>
    </Grid>
  </footer>
)

export default withStyles(s)(Header)
