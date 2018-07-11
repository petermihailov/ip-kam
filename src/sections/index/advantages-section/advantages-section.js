import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Container from '../../../components/container/container'

import DirectionsCarIcon from '@material-ui/icons/DirectionsCar'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import TouchAppIcon from '@material-ui/icons/TouchApp'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'

import calendarIcon from './icon-calendar.svg'
import employerIcon from './icon-employer.svg'
import licensingIcon from './icon-licensing.svg'
import touchIcon from './icon-touch.svg'

const styles = theme => ({
  icon: {
    display: 'block',
    margin: '0 auto',
    width: 48,
    height: 48,
    marginBottom: theme.spacing.unit,
  },
})

const data = [
  {
    icon: employerIcon,
    label: 'Бесплатный выезд специалиста в день обращения',
  },
  {
    icon: calendarIcon,
    label: 'Монтаж по индивидуальному проекту за 1 день',
  },
  {
    icon: touchIcon,
    label:
      'Управление в 1 клик',
  },
  {
    icon: licensingIcon,
    label: 'Гарантия 3 года',
  },
]

const AdvantagesSection = ({ classes }) => (
  <Container component="section">
    <Grid container spacing={24}>
      {data.map((itm) => (
        <Grid key={itm.label} item xs={6} sm={3}>
          <img className={classes.icon} src={itm.icon} alt=""/>
          <Typography align="center" component="span">
            {itm.label}
          </Typography>
        </Grid>
      ))}
    </Grid>
  </Container>
)

export default withStyles(styles)(AdvantagesSection)

// <ListItem key={idx}>
//   <ListItemIcon className={classes.icon}>{itm.icon}</ListItemIcon>
// <ListItemText
// className={classes.item}
// primary={itm.label}
// disableTypography
// />
// </ListItem>