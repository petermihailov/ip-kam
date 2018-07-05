import React, { Fragment } from 'react'
import { withPrefix } from 'gatsby-link'
import { withStyles } from '@material-ui/core/styles'
import Helmet from 'react-helmet'
import Container from '../components/container/container'
import Typography from '@material-ui/core/Typography'
import HeaderBanner from '../components/header-banner/header-banner'
import ImageSlider from '../components/image-slider/image-slider'
import Divider from '@material-ui/core/Divider'

import projectsData from '../../data/projects'

const s = theme => ({
  container: {
    columnGap: theme.spacing.unit,
    maxWidth: theme.breakpoints.values.lg,
    margin: '0 auto',
  },
  item: {
    display: 'inline-block',
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
    <HeaderBanner title="Наши работы"/>
    <div className={classes.container}>
      {projectsData.map(({ title, description, images }) => (
        <Container className={classes.item}>
          <ImageSlider
            images={images.map(src => withPrefix('/projects/' + src))}
          />
          <Typography variant="title" gutterBottom>
            {title}
          </Typography>
          <Typography paragraph>{description}</Typography>
          <Divider/>
        </Container>
      ))}
    </div>
  </Fragment>
)

export default withStyles(s)(ProjectsPage)
