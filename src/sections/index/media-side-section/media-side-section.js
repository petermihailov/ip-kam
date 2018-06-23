import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Section from '../../../components/section/section'
import MediaSide from '../../../components/media-side/media-side'
import IphoneVideo from './iphone-video/iphone-video'
import MacbookVideo from './macbook-screen/macbook-screen'

const s = theme => ({
  container: {
    [theme.breakpoints.up('sm')]: {
      marginTop: 64,
    },
  },
})

const Text = () => (
  <Typography color="inherit" variant="display1">
    {title}
  </Typography>
)

const MediaSideSection = ({ classes, ...props }) => (
  <Section>
    <Grid container spacing={16}>
      <Grid item xs={12}>
        <Typography align="center" color="inherit" variant="title">
          Видеонаблюдение через смартфон
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <MediaSide Media={<IphoneVideo />} />
      </Grid>
      <Grid item xs={12}>
        <Typography align="center" color="inherit" variant="title">
          Видеонаблюдение на компьютере
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <MediaSide Media={<MacbookVideo />} />
      </Grid>
    </Grid>
  </Section>
)

export default MediaSideSection
