import React, { Fragment } from 'react'
import queryString from 'query-string'
import { withStyles } from '@material-ui/core/styles'
import Helmet from 'react-helmet'
import Paper from '@material-ui/core/Paper'
import HeaderBanner from '../components/header-banner/header-banner'
import getEstimate from '../components/estimate/estimate-calculator'
import EstimateTable from './../components/estimate/estimate'

const s = theme => ({
  container: {
    padding: theme.spacing.unit * 2,
  },
})

const Estimate = ({ classes, location }) => {
  const queryParams = queryString.parse(location.search)
  const data = getEstimate(queryParams)

  return (
    <Fragment>
      <Helmet
        title="IP-Kam - Рассчет стоимости"
        meta={[
          {
            name: 'description',
            content: 'Калькулятор стоимости установки видеонаблюдения',
          },
          {
            name: 'keywords',
            content: 'видеонаблюдение, калькулятор стоимости, рассчет, смета',
          },
        ]}
      />
      <HeaderBanner title="Калькулятор стоимости установки видеонаблюдения" />
      <Paper elevation={0} square className={classes.container}>
        <EstimateTable data={data} />
      </Paper>
    </Fragment>
  )
}

export default withStyles(s)(Estimate)
