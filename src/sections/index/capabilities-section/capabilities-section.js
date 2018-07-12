import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Container from '../../../components/container/container'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

import cctvBg from './cctv-camera-bg.svg'

const styles = theme => ({
  icon: {
    color: '#fd9800',
  },
  bgImg: {
    position: 'absolute',
    bottom: 0,
    width: 320,
    right: '5%',
    opacity: 0,
  },
  [theme.breakpoints.up('sm')]: {
    bgImg: {
      opacity: .09,
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
  <Container component="section" banner>
    <Typography align="center" color="inherit" variant="title">
      Возможности наших систем
    </Typography>
    <List>
      {data.map((itm, idx) => (
        <ListItem key={idx}>
          <CheckCircleIcon className={classes.icon}/>
          <ListItemText primary={itm} disableTypography/>
        </ListItem>
      ))}
    </List>
    <img className={classes.bgImg} src={cctvBg} alt=""/>
  </Container>
)

export default withStyles(styles)(CapabilitiesSection)
