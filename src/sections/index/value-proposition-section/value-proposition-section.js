import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Container from '../../../components/container/container'

// import imgSrc from './van.png'
import imgSrc from './camera.png'

const s = theme => ({
  container: {
    maxWidth: '100%',
    padding: theme.spacing.unit * 2,
    marginTop: -160,
    backgroundColor: 'transparent',
  },
  textBlock: {
    maxWidth: 720,
    margin: '0 auto',
    color: 'rgba(132,135,141,0.6)',
    textAlign: 'center',
  },
  image: {
    display: 'block',
    position: 'relative',
    maxWidth: 400,
    margin: `0 auto ${theme.spacing.unit * 2}px`,
    width: 'auto',
    height: 200,
  },
  [theme.breakpoints.down('sm')]: {
    text: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
  },
  [theme.breakpoints.up('sm')]: {
    textBlock: {
      maxWidth: theme.breakpoints.values.md,
    },
  },
})

const ValueProposition = ({ classes }) => (
  <Container component="section" className={classes.container}>
    <img className={classes.image} src={imgSrc} alt="" />
    <Paper className={classes.textBlock} elevation={0} square>
      <Typography
        className={classes.text}
        variant="title"
        component="h1"
        gutterBottom
      >
        Хотите держать свой бизнес под контролем или сохранить безопасность и
        комфорт в доме?
      </Typography>
      <Typography
        className={classes.text}
        variant="title"
        component="p"
        color="inherit"
      >
        Наше видеооборудование станет отличным решением! Мы разработаем и
        установим уникальный проект, адаптированный под ваши потребности и
        задачи.
      </Typography>
    </Paper>
  </Container>
)

export default withStyles(s)(ValueProposition)
