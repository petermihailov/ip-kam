import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Container from '../../../components/container/container'

import vanImg from './van.png'

const s = theme => ({
  container: {
    maxWidth: '100%',
    padding: theme.spacing.unit * 2,
    marginTop: -160,
    backgroundColor: 'transparent',
  },
  text: {
    maxWidth: theme.breakpoints.values.md,
    color: 'rgba(132,135,141,0.6)',
    textAlign: 'center',
    fontSize: '2.5rem',
  },
  image: {
    display: 'block',
    position: 'relative',
    maxWidth: 400,
    margin: `0 auto ${theme.spacing.unit * 2}px`,
  },
})

const ValueProposition = ({ classes }) => (
  <Container component="section" className={classes.container}>
    <img className={classes.image} src={vanImg} alt="" />
    <Paper className={classes.text} elevation={0} square>
      <Typography variant="title" component="h1" gutterBottom>
        Хотите держать свой бизнес под контролем или сохранить безопасность и
        комфорт в доме?
      </Typography>
      <Typography variant="title" component="p" color="inherit">
        Наше видеооборудование станет отличным решением! Мы разработаем и
        установим уникальный проект, адаптированный под ваши потребности и
        задачи.
      </Typography>
    </Paper>
  </Container>
)

export default withStyles(s)(ValueProposition)
