import React, { Component } from 'react'
import Link from 'gatsby-link'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '../../../components/container/container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const styles = theme => ({})

class OrderSection extends Component {
  state = {}

  submitHandler = e => {
    e.preventDefault()
  }

  render() {
    const { classes } = this.props
    return (
      <Container>
        <Typography align="center" color="inherit" variant="title">
          Оставьте заявку сейчас
        </Typography>
        <form ref="form" onSubmit={this.submitHandler}>
          <TextField name="name" label="Ваше имя" margin="normal" fullWidth />
          <TextField
            name="phone"
            label="Ваше телефон"
            margin="normal"
            fullWidth
          />
          <TextField
            name="comment"
            label="Комментарий"
            margin="normal"
            multiline
            rowsMax="5"
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

export default withStyles(styles)(OrderSection)
