import React from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '../../../components/container/container'
import Survey from '../../../components/survey/survey'

const SurveySection = ({ classes, ...props }) => (
  <Container component="section" elevation={1}>
    <Typography align="center" variant="title">
      Пройдите тест и получите смету на установку видеонаблюдения
    </Typography>
    <Survey />
  </Container>
)

export default SurveySection
