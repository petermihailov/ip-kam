import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'
import { withStyles } from '@material-ui/core/styles'
import HeaderBanner from '../components/header-banner/header-banner'
import MediaSideSection from '../sections/index/media-side-section/media-side-section'
import CapabilitiesSection from '../sections/index/capabilities-section/capabilities-section'
import TimelineSection from '../sections/index/timeline-section/timeline-section'
import AdvantageSection from '../sections/index/advantages-section/advantages-section'
import SurveySection from '../sections/index/survey-section/survey-section'
import ValuePropositionSection from '../sections/index/value-proposition-section/value-proposition-section'
import MapSection from '../sections/index/map-section/map-section'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: theme.spacing.unit,
  },
  button: {
    margin: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
})

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
    const { classes } = this.props

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
          title="Установка современных систем видеонаблюдения"
          description="Быстрая и качественная установка систем видеонаблюдения для охраны и контроля собственности за разумные деньги"
        >
          <div className={classes.buttons}>
            <Button
              className={classes.button}
              onClick={this.openOrderDialog}
              variant="contained"
              color="primary"
              size="large"
            >
              Оставить заявку
            </Button>
            <Button
              className={classes.button}
              onClick={this.openCallDialog}
              variant="contained"
              size="large"
            >
              Заказать звонок
            </Button>
          </div>
        </HeaderBanner>
        <ValuePropositionSection />
        <AdvantageSection />
        <MediaSideSection />
        <SurveySection />
        <TimelineSection />
        <CapabilitiesSection />
        <MapSection />
      </Fragment>
    )
  }
}

export default withStyles(styles)(IndexPage)
