import React, { Fragment } from 'react'
import { withPrefix } from 'gatsby-link'
import { withStyles } from '@material-ui/core/styles'
import Helmet from 'react-helmet'
import Container from '../components/container/container'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import HeaderBanner from '../components/header-banner/header-banner'
import ImageSlider from '../components/image-slider/image-slider'

import projectsData from '../../data/projects'

const s = theme => ({
  container: {
    columnGap: theme.spacing.unit * 2,
    maxWidth: theme.breakpoints.values.lg,
    margin: '0 auto',
  },
  item: {
    display: 'inline-block',
    overflow: 'hidden',
    marginBottom: 8,
  },
  text: {
    padding: theme.spacing.unit * 2,
  },
  [theme.breakpoints.up('sm')]: {
    container: {
      columnCount: 2,
    },
  },
  [theme.breakpoints.up('md')]: {
    container: {
      columnCount: 3,
    },
  },
  [theme.breakpoints.up('lg')]: {
    container: {
      columnCount: 4,
    },
    item: {
      width: 310,
    },
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
    <Container className={classes.container}>
      {projectsData.map(({ title, description, images }) => (
        <Paper key={title} className={classes.item}>
          <ImageSlider
            images={images.map(src => withPrefix('/projects/' + src))}
          />
          <div className={classes.text}>
            <Typography variant="title" gutterBottom>
              {title}
            </Typography>
            <Typography paragraph>{description}</Typography>
          </div>
        </Paper>
      ))}
    </Container>
  </Fragment>
)

export default withStyles(s)(ProjectsPage)
