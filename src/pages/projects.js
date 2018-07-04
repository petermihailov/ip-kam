import React, { Fragment } from 'react'
import { withPrefix } from 'gatsby-link'
import { withStyles } from '@material-ui/core/styles'
import Helmet from 'react-helmet'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import HeaderBanner from '../components/header-banner/header-banner'
import ImageSlider from '../components/image-slider/image-slider'

import projectsData from '../../data/projects'

const s = theme => ({
  container: {
    padding: theme.spacing.unit * 2,
  },
})

const ProjectsPage = ({ classes }) => (
  <Fragment>
    <Helmet
      title="IP-Kam - Наши работы"
      meta={[
        {
          name: 'description',
          content: 'Примеры наших работ',
        },
        {
          name: 'keywords',
          content: 'видеонаблюдение, готовые проекты, видеомонтаж под ключ',
        },
      ]}
    />
    <HeaderBanner title="Наши работы" />
    <Paper elevation={0} square className={classes.container}>
      <Grid container spacing={16}>
        {projectsData.map(({ title, description, images }) => (
          <Grid key={title} item xs={12}>
            <Typography align="center" variant="title">
              {title}
            </Typography>
            <Typography paragraph>{description}</Typography>
            <ImageSlider
              images={images.map(src => withPrefix('/projects/' + src))}
            />
          </Grid>
        ))}
      </Grid>
    </Paper>
  </Fragment>
)

export default withStyles(s)(ProjectsPage)
