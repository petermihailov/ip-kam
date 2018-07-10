import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Container from '../../../components/container/container'

import DirectionsCarIcon from '@material-ui/icons/DirectionsCar'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import TouchAppIcon from '@material-ui/icons/TouchApp'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'

import color from '@material-ui/core/colors/deepOrange'

const styles = theme => ({
  icon: {
    color: color[500],
  },
})

const data = [
  {
    icon: <DirectionsCarIcon />,
    label: 'Бесплатный выезд специалиста в день обращения',
  },
  {
    icon: <AccessTimeIcon />,
    label: 'Монтаж по индивидуальному проекту за 1 день',
  },
  {
    icon: <TouchAppIcon />,
    label:
      'Управление системой со своего смартфона, планшета или компьютера в 1 клик',
  },
  {
    icon: <VerifiedUserIcon />,
    label: 'Гарантия 3 года',
  },
]

const AdvantagesSection = ({ classes }) => (
  <Container component="section">
    <Typography align="center" color="inherit" variant="title">
      Преимущества
    </Typography>
    <List className={classes.list}>
      {data.map((itm, idx) => (
        <ListItem key={idx}>
          <ListItemIcon className={classes.icon}>{itm.icon}</ListItemIcon>
          <ListItemText
            className={classes.item}
            primary={itm.label}
            disableTypography
          />
        </ListItem>
      ))}
    </List>
  </Container>
)

export default withStyles(styles)(AdvantagesSection)
