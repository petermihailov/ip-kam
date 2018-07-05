import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Container from '../../../components/container/container'

import vanImg from './van.png'

const s = theme => ({
  container: {
    padding: theme.spacing.unit * 2,
  },
  text: {
    margin: '0 auto',
    maxWidth: theme.breakpoints.values.sm,
  },
  van: {
    margin: -theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2,
    backgroundImage:
      'linear-gradient(5deg, rgb(7, 20, 34) 10%, rgb(11, 32, 56) 45%, transparent 45%)',
  },
  image: {
    display: 'block',
    maxWidth: 400,
    margin: '0 auto',
  },
  [theme.breakpoints.up('md')]: {
    container: {
      marginTop: theme.spacing.unit * 2,
    },
  },
})

const ValueProposition = ({ classes }) => (
  <Container component="section" elevation={1} className={classes.container}>
    <Paper className={classes.text} elevation={0} square>
      <Typography align="center" variant="title" gutterBottom>
        Хотите держать свой бизнес под контролем или сохранить безопасность и
        комфорт в доме?
      </Typography>
      <Typography align="center" gutterBottom>
        Наше видеооборудование станет отличным решением! Мы разработаем и
        установим уникальный проект, адаптированный под ваши потребности и
        задачи.
      </Typography>
    </Paper>
    <div className={classes.van}>
      <img className={classes.image} src={vanImg} alt="" />
    </div>
  </Container>
)

export default withStyles(s)(ValueProposition)
