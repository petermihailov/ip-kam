import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Container from '../../../components/container/container'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

import bannerBg from './bannes.jpg'

const styles = theme => ({
  section: {
    backgroundImage: `url(${bannerBg})`,
    backgroundSize: 'cover',
    backgroundPosition: '65% center',
  },
  container: {
    background: 'none',
    color: '#fff',
  },
  icon: {
    color: '#fd9800',
  },
  [theme.breakpoints.up(1100)]: {
    section: {
      height: 0,
      position: 'relative',
      paddingTop: '34.76190476%', // (h1168 / w3360) * 100 = 34.76190476
    },
    container: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    list: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
    },
  },
})

const data = [
  'Простота и доступность',
  'Доступ с мобильных устройств',
  'Безопасное подключение',
  'Уведомление о движении на телефон',
  'Высокое качество видео и детализация',
  'Широкий угол обзора',
  // "Работа даже через 3G / 4G Интернет",
  // "ИК подсветка для ночного наблюдения",
  // "Оборудование не требует наличия внешнего IP-адреса"
]

const CapabilitiesSection = ({ classes }) => (
  <section className={classes.section}>
    <Container className={classes.container}>
      <Typography align="center" color="inherit" variant="title">
        Возможности наших систем
      </Typography>
      <List className={classes.list}>
        {data.map((itm, idx) => (
          <ListItem key={idx}>
            <CheckCircleIcon className={classes.icon} />
            <ListItemText primary={itm} disableTypography />
          </ListItem>
        ))}
      </List>
    </Container>
  </section>
)

export default withStyles(styles)(CapabilitiesSection)
