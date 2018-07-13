import React from 'react'
import Link from 'gatsby-link'
import { withStyles } from '@material-ui/core/styles'
import Container from './../../components/container/container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import PaymentSystems from './../payment-systems/payment-systems'

import bg from './bg-footer.svg'
import CallIcon from '@material-ui/icons/Call'

import pages from './../../../data/pages'
import { phones } from './../../../data/contacts'

const s = theme => ({
  footer: {
    padding: theme.spacing.unit * 2,
    color: '#fff',
    backgroundColor: '#111026',
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  container: {
    backgroundColor: 'transparent',
  },
  listItem: {
    textAlign: 'center',
  },
  phonesBlock: {
    display: 'none',
  },
  phonesList: {
    width: 250,
    margin: '0 auto',
  },
  [theme.breakpoints.up('sm')]: {
    phonesBlock: {
      display: 'flex',
    },
  },
  [theme.breakpoints.up('md')]: {
    listItem: {
      textAlign: 'right',
    },
  },
})

const Header = ({ classes }) => (
  <footer className={classes.footer}>
    <Container className={classes.container}>
      <Grid container justify={'center'}>
        <Grid item xs={12} sm={4} md={3} className={classes.phonesBlock}>
          <List>
            {pages.map((item, idx) => (
              <ListItem key={idx} component={Link} to={item.route} button>
                <ListItemText
                  className={classes.listItem}
                  primary={item.label}
                  disableTypography
                />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} sm={4} md={6}>
          <Typography
            align={'center'}
            variant="headline"
            color="inherit"
            gutterBottom
          >
            Способы оплаты
          </Typography>
          <PaymentSystems />
          <Grid container justify={'space-around'} spacing={8}>
            <Grid item>
              <Button variant="contained" color="primary" size="large">
                Оставить заявку
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" size="large">
                Заказать звонок
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <List className={classes.phonesList}>
            {phones.map((item, idx) => (
              <ListItem
                key={idx}
                component="a"
                href={'tel:' + item.value}
                button
              >
                <CallIcon />
                <ListItemText primary={item.label} disableTypography />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Container>
    <Typography variant="body1" gutterBottom color="inherit">
      © IP-Кам
    </Typography>
    <Typography variant="caption" color="inherit">
      <address>115409, Россия, Москва, Каширское ш., 50 корпус 2А</address>
    </Typography>
  </footer>
)

export default withStyles(s)(Header)
