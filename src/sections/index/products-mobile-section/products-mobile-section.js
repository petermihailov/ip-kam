import React from 'react'
import Link from 'gatsby-link'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Section from '../../../components/section/section'

const ProductsMobileSection = ({ classes, ...props }) => (
  <Section>
    <Grid container spacing={16}>
      <Grid item xs={12}>
        <Typography align="center" color="inherit" variant="title">
          Оборудование
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography align="center" color="inherit">
          Помимо устанавки системы видеонаблюдения вы можете отдельно заказать
          наше <Link to={'/products/'}>оборудование</Link>
        </Typography>
      </Grid>
    </Grid>
  </Section>
)

export default ProductsMobileSection
