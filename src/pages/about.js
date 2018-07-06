import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Helmet from 'react-helmet'
import Typography from '@material-ui/core/Typography'
import HeaderBanner from '../components/header-banner/header-banner'
import MapSection from '../sections/index/map-section/map-section'
import Container from '../components/container/container'

const s = theme => ({
  container: {
    padding: theme.spacing.unit * 2,
  },
})

const AboutPage = ({ classes }) => (
  <Fragment>
    <Helmet
      title="IP-Kam - О нас"
      meta={[
        {
          name: 'description',
          content:
            'Наша команда работает с 2012 года. Мы занимаемся установкой современных IP-систем видеонаблюдения, реализующих охранные функции и возможности самостоятельного контроля своего бизнеса или частной собственности за разумные деньги.',
        },
        { name: 'keywords', content: 'видеонаблюдение, о компании, ip-kam' },
      ]}
    />
    <HeaderBanner title="О нас"/>
    <Container>
      <Typography paragraph>
        Наша команда работает с 2012 года. Мы занимаемся установкой
        современных IP-систем видеонаблюдения, реализующих охранные функции
        и возможности самостоятельного контроля своего бизнеса или частной
        собственности за разумные деньги.
      </Typography>
      <Typography paragraph>
        За 5 лет работы мы установили и поддерживаем более 450 систем
        безопасности в Москве и Московской области
      </Typography>
      <Typography paragraph>
        Каждый проект проходит 5 стадий контроля качества, сопровождается
        личным менеджером, а все расчёты проводятся персональным инженером
        проекта
      </Typography>
      <Typography>
        Мы профессионально устанавливаем аналоговые системы видеонаблюдения.
        Наша деятельность лицензирована, гарантируется 100%-ная прозрачность
        сотрудничества. Предоставляется официальная гарантия, оказывается
        постгарантийная техническая поддержка на всём протяжении
        эксплуатации видеотехники. В цену комплекта оборудования входит
        стоимость работ и расходных материалов.
      </Typography>
    </Container>
    <MapSection/>
  </Fragment>
)

export default withStyles(s)(AboutPage)
