import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Section from '../../../components/section/section'
import Survey from '../../../components/survey/survey'

const SurveySection = ({ classes, ...props }) => (
  <Section>
    <Grid container spacing={16}>
      <Grid item xs={12}>
        <Typography align="center" color="inherit" variant="title">
          Пройдите тест за 1 минуту и получите 3 сметы на установку
          видеонаблюдения
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Survey />
      </Grid>
    </Grid>
  </Section>
)

export default SurveySection
