import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'
import HeaderBanner from '../components/header-banner/header-banner'
import MediaSideSection from '../sections/index/media-side-section/media-side-section'
import ProductsMobileSection from '../sections/index/products-mobile-section/products-mobile-section'
import CapabilitiesSection from '../sections/index/capabilities-section/capabilities-section'
import TimelineSection from '../sections/index/timeline-section/timeline-section'
import AdvantageSection from '../sections/index/advantages-section/advantages-section'
import SurveySection from '../sections/index/survey-section/survey-section'
import ValuePropositionSection from '../sections/index/value-proposition-section/value-proposition-section'
import MapSection from '../sections/index/map-section/map-section'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

class IndexPage extends Component {
  openOrderDialog = () => {
    const { openForm } = this.props
    openForm('Новая заявка')
  }

  openCallDialog = () => {
    const { openForm } = this.props
    openForm('Обратный звонок')
  }

  render() {
    return (
      <Fragment>
        <Helmet
          title="IP-Kam - Установка систем видеонаблюдения"
          meta={[
            {
              name: 'description',
              content:
                'Устанавливаем современные системы видеонаблюдения для охраны и контроля своей собственности за разумные деньги',
            },
            { name: 'keywords', content: 'видеонаблюдение' },
          ]}
        />
        <HeaderBanner
          title="Проектирование и устанавка систем видеонаблюдения"
          description="Устанавливаем современные системы видеонаблюдения для охраны и контроля своей собственности за разумные деньги"
        >
          <Grid container spacing={16}>
            <Grid item xs={12} sm={6}>
              <Button
                onClick={this.openOrderDialog}
                variant="contained"
                color="primary"
                size="large"
              >
                Оставить заявку
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                onClick={this.openCallDialog}
                variant="contained"
                size="large"
              >
                Заказать звонок
              </Button>
            </Grid>
          </Grid>
        </HeaderBanner>
        <ValuePropositionSection />
        <MediaSideSection />
        <SurveySection />
        <CapabilitiesSection />
        <TimelineSection />
        <AdvantageSection />
        <MapSection />
      </Fragment>
    )
  }
}

export default IndexPage
