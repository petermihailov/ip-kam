import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Helmet from 'react-helmet'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import HeaderBanner from '../components/header-banner/header-banner'

const s = theme => ({
  container: {
    padding: theme.spacing.unit * 2,
  },
})

const DeliveryPage = ({ classes }) => (
  <Fragment>
    <Helmet
      title="IP-Kam - Доставка и оплата"
      meta={[
        {
          name: 'description',
          content: 'Доставка или получение товара, способы ооплаты',
        },
        { name: 'keywords', content: 'видеонаблюдение, доставка, оплата' },
      ]}
    />
    <HeaderBanner title="Доставка и оплата" />
    <div className={classes.container}>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Typography align="center" color="inherit" variant="title">
            Варианты оплаты
          </Typography>
          <Typography color="inherit" paragraph>
            Оплата заказов производится при получении товара. Возможна как
            наличная, так и безналичная оплата. Вы оплачиваете заказ, только
            когда он оказывается у вас на пороге.
          </Typography>

          <Typography align="center" color="inherit" variant="title">
            Доставка или получение товара
          </Typography>
          <Typography color="inherit" paragraph>
            Доставка по Москве и Московской области практически всей продукции
            возможна уже на следующий день. В отдельных случаях возможна
            доставка в день заказа. Работаем Пн-Пт c 9:00 до 18:00, Cб-Вс с
            10:00 до 17:00.
          </Typography>
          <Typography color="inherit" paragraph>
            Если мы устанавливаем систему под ключ, доставку осуществляют наши
            специалисты прямо на объект в день установки системы.
          </Typography>

          <Typography color="inherit">
            Если вы приобретаете только оборудование, возможны варианты:
          </Typography>
          <List dense>
            <ListItem>
              <ListItemText
                primary="Получение товара лично у нас в офисе"
                secondary="(с доверенностью и документами, удостоверяющими личность)"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Курьерская доставка по Москве и Московской области"
                secondary="(стоимость уточняйте у менеджеров)"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Доставка транспортными компаниями по России: мы работаем с Деловыми Линиями, Байкал Сервис,
            Желдорэкспедиция и ПЭК"
              />
            </ListItem>
          </List>

          <Typography color="inherit">
            Мы работаем в полном соответствии с законом и всегда передаем
            покупателям чек, гарантийный талон, а также все иные необходимые
            документы.
          </Typography>
        </Grid>
      </Grid>
    </div>
  </Fragment>
)

export default withStyles(s)(DeliveryPage)
