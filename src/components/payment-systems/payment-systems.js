import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import mastercard from './icons/mastercard.svg'
import mir from './icons/mir.svg'
import visa from './icons/visa.svg'
import yandex from './icons/yandex.svg'

const s = theme => ({
  item: {
    padding: theme.spacing.unit,
  },
  img: {
    height: 30,
    objectFit: 'contain',
  },
})

const PaymentSystems = ({ classes }) => (
  <Grid container>
    <Grid item xs={3} className={classes.item}>
      <img src={mastercard} alt="" className={classes.img} />
    </Grid>
    <Grid item xs={3} className={classes.item}>
      <img src={mir} alt="" className={classes.img} />
    </Grid>
    <Grid item xs={3} className={classes.item}>
      <img src={visa} alt="" className={classes.img} />
    </Grid>
    <Grid item xs={3} className={classes.item}>
      <img src={yandex} alt="" className={classes.img} />
    </Grid>
  </Grid>
)

export default withStyles(s)(PaymentSystems)
