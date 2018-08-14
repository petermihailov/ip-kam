import React, { Component } from 'react'
import Link from 'gatsby-link'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import Container from '../../../components/container/container'
import OrderForm from '../../../components/order-form/order-form'

const styles = theme => ({
  section: {
    margin: theme.spacing.unit * 2,
  },
})

class OrderSection extends Component {
  render() {
    const { classes } = this.props
    return (
      <section className={classes.section}>
        <OrderForm className={classes.container} />
      </section>
    )
  }
}

export default withStyles(styles)(OrderSection)
