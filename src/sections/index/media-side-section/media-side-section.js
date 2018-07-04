import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Container from '../../../components/container/container'
import IphoneVideo from './iphone-video/iphone-video'
import MacbookVideo from './macbook-screen/macbook-screen'

const s = theme => ({
  mobileBottom: {
    order: 1,
  },
  gutterBottom: {
    marginBottom: theme.spacing.unit * 2,
  },
  [theme.breakpoints.up('sm')]: {
    mobileBottom: {
      order: 0,
    },
  },
})

const MediaSideSection = ({ classes }) => (
  <Container component="section">
    <Typography align="center" variant="title" gutterBottom>
      Видеонаблюдение через смартфон
    </Typography>
    <Grid
      container
      spacing={16}
      alignItems="center"
      className={classes.gutterBottom}
    >
      <Grid item xs={12} sm={6} className={classes.mobileBottom}>
        <Typography>
          Самое рациональное, эффективное и удобное решение для тех, кто ценит
          мобильность и комфорт. Удаленное видеонаблюдение можно организовать
          практически через любое устройство имеющее выход в интернет: телефон,
          планшет, компьютер, даже через некоторые электнонные книги
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <IphoneVideo />
      </Grid>
    </Grid>
    <Typography align="center" variant="title" gutterBottom>
      Видеонаблюдение на компьютере
    </Typography>
    <Grid container spacing={16} alignItems="center">
      <Grid item xs={12} sm={6}>
        <MacbookVideo />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography>
          Вы сможете оперативно подключить видеонаблюдение на неограниченном
          количестве объектов и объединить их в систему с возможностью доступа
          из любой точки мира. Неважно, требуется ли вам установка нескольких
          камер в небольшом магазине или нескольких сотен камер в торговой сети.
        </Typography>
      </Grid>
    </Grid>
  </Container>
)

export default withStyles(s)(MediaSideSection)
