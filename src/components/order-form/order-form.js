import React, { Component } from 'react'
import cn from 'classnames'
import Link from 'gatsby-link'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import Container from '../container/container'
import { PhoneField } from '../order-dialog/phone-question'

const styles = theme => ({
  container: {
    maxWidth: 500,
  },
})

class OrderForm extends Component {
  state = {}

  submitHandler = e => {
    e.preventDefault()
  }

  render() {
    const { classes, className } = this.props
    return (
      <Container className={cn(classes.container, className)} elevation={2}>
        <Typography align="center" color="inherit" variant="title">
          Оставьте заявку сейчас
        </Typography>
        <form ref="form" onSubmit={this.submitHandler}>
          <TextField
            name="name"
            label="Ваше имя"
            margin="normal"
            required
            fullWidth
          />
          <PhoneField fullWidth />
          <TextField
            name="comment"
            label="Комментарий"
            margin="normal"
            multiline
            rowsMax="10"
            fullWidth
          />
          <Button
            color="primary"
            variant="contained"
            disabled={false}
            fullWidth
          >
            Отправить
          </Button>
          <Typography variant="caption" className={classes.policy}>
            Нажимая на кнопку "отправить" вы соглашаетесь с{' '}
            <Link to="/privacy-policy" target="_blank">
              политикой конфиденциальности
            </Link>
          </Typography>
        </form>
      </Container>
    )
  }
}

export default withStyles(styles)(OrderForm)
