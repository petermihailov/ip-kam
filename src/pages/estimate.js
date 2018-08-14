import React, { Component, Fragment } from 'react'
import { push } from 'gatsby-link'
import queryString from 'query-string'
import { withStyles } from '@material-ui/core/styles'
import Helmet from 'react-helmet'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import HeaderBanner from '../components/header-banner/header-banner'
import Container from '../components/container/container'
import CamsQuestion from '../components/survey/cams-question'
import { data as bonusData } from '../components/survey/bonus-question'
import getEstimate from '../components/estimate/estimate-calculator'
import EstimateTable from './../components/estimate/estimate'

import PrintIcon from '@material-ui/icons/Print'
import LinkIcon from '@material-ui/icons/Link'

const s = theme => ({
  container: {
    padding: theme.spacing.unit * 2,
  },
  controls: {
    marginTop: theme.spacing.unit * 2,
  },
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

class Estimate extends Component {
  onChange = e => {
    const { location } = this.props
    const { name, value } = e.target
    const parsedQueryParams = queryString.parse(location.search)
    const queryParams = queryString.stringify({
      ...parsedQueryParams,
      [name]: value,
    })
    push(`/estimate?${queryParams}`)
  }

  renderBonusField = (name, value, label, disabled) => {
    const id = name + '-id'

    return (
      <FormControl fullWidth disabled={disabled}>
        <InputLabel htmlFor={id} shrink>
          {label}
        </InputLabel>
        <Select
          value={value}
          onChange={this.onChange}
          inputProps={{
            name,
            id,
          }}
          native
        >
          <option value="">нет</option>
          {bonusData.map((label, value) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Select>
        {disabled && (
          <FormHelperText>Доступно при установке от 4 камер</FormHelperText>
        )}
      </FormControl>
    )
  }

  render() {
    const { classes, location } = this.props
    const parsedQueryParams = queryString.parse(location.search)
    const params = {}

    for (let key in parsedQueryParams) {
      const val = parseInt(parsedQueryParams[key])
      if (!isNaN(val)) {
        params[key] = +val
      }
    }

    const { insideCams, outsideCams, bonus } = params
    const camsCount = (insideCams || 0) + (outsideCams || 0)

    const data = getEstimate(params)

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
        <HeaderBanner
          title="Калькулятор стоимости установки видеонаблюдения"
          description="Выберите количество камер и получите смету на установку видеонаблюдения"
          className="noPrint"
        >
          <Grid container spacing={8} className={classes.controls}>
            {camsCount > 0 && (
              <Grid item xs={12} className={classes.buttons}>
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
                  Звонок по смете
                </Button>
              </Grid>
            )}
            <Grid item xs={12} sm={8}>
              <CamsQuestion
                outsideCams={outsideCams}
                insideCams={insideCams}
                onChange={this.onChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              {this.renderBonusField(
                'bonus',
                bonus,
                'Выберите бонус',
                camsCount < 4
              )}
            </Grid>
          </Grid>
        </HeaderBanner>
        <Container>
          <Paper elevation={0} square className={classes.container}>
            <div className="noPrint">
              <Tooltip title="Печать" placement="top">
                <Button
                  variant="fab"
                  color="primary"
                  aria-label="Print"
                  className={classes.button}
                >
                  <PrintIcon />
                </Button>
              </Tooltip>
              <Tooltip title="Копировать ссылку" placement="top">
                <Button
                  variant="fab"
                  color="primary"
                  aria-label="Copy"
                  className={classes.button}
                >
                  <LinkIcon />
                </Button>
              </Tooltip>
            </div>
            <Typography variant="title" gutterBottom className="printOnly">
              {`ip-kam.ru: Смета на установку ${camsCount} камер`}
            </Typography>
            {camsCount > 0 ? (
              <EstimateTable data={data} />
            ) : (
              'Выберите количество камер'
            )}
          </Paper>
        </Container>
      </Fragment>
    )
  }
}

export default withStyles(s)(Estimate)
