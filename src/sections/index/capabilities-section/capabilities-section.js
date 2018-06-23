import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Section from '../../../components/section/section'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

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

const CapabilitiesSection = ({ classes, ...props }) => (
  <Section banner>
    <Grid container spacing={16}>
      <Grid item xs={12}>
        <Typography align="center" color="inherit" variant="title">
          Возможности наших систем
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <List>
          {data.map((itm, idx) => (
            <ListItem key={idx}>
              <CheckCircleIcon color="inherit" />
              <ListItemText primary={itm} disableTypography />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  </Section>
)

export default CapabilitiesSection
