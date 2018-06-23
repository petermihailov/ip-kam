import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Section from '../../../components/section/section'

import DirectionsCarIcon from '@material-ui/icons/DirectionsCar'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import TouchAppIcon from '@material-ui/icons/TouchApp'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'

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

const AdvantagesSection = ({ classes, ...props }) => (
  <Section banner>
    <Grid container spacing={16}>
      <Grid item xs={12}>
        <Typography align="center" color="inherit" variant="title">
          Преимущества
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <List>
          {data.map((itm, idx) => (
            <ListItem key={idx}>
              {itm.icon}
              <ListItemText primary={itm.label} disableTypography />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  </Section>
)

export default AdvantagesSection
