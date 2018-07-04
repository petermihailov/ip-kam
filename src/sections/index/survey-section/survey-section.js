import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '../../../components/container/container'
import Survey from '../../../components/survey/survey'

const s = theme => ({
  root: {
    margin: `${theme.spacing.unit * 2}px auto`,
  },
})

const SurveySection = ({ classes }) => (
  <Container className={classes.root} component="section" elevation={2}>
    <Typography align="center" variant="title">
      Пройдите тест и получите смету на установку видеонаблюдения
    </Typography>
    <Survey />
  </Container>
)

export default withStyles(s)(SurveySection)
