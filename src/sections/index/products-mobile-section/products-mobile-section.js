import React from 'react'
import Link from 'gatsby-link'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Section from '../../../components/section/section'

const ProductsMobileSection = () => (
  <Section>
    <Grid container spacing={16}>
      <Grid item xs={12}>
        <Typography align="center" variant="title">
          Оборудование
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography align="center">
          Помимо устанавки системы видеонаблюдения вы можете отдельно заказать
          наше <Link to={'/products/'}>оборудование</Link>
        </Typography>
      </Grid>
    </Grid>
  </Section>
)

export default ProductsMobileSection
