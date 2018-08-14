import React, { Fragment } from 'react'
import cn from 'classnames'
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles,
} from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import { sumSectionPrice } from './estimate-calculator'

const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
})

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  cell: {
    padding: '4px 48px 4px 16px',
  },
  headLine: {
    fontWeight: 'bold',
    backgroundColor: '#f8f8fc',
  },
  sum: {
    fontWeight: 'bold',
    textAlign: 'right',
  },
  finalSum: {
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#f8f8fc',
  },
})

const Estimate = ({ classes, data }) => (
  <MuiThemeProvider theme={theme}>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.cell}>Наименование</TableCell>
            <TableCell className={classes.cell} numeric>
              Единицы
            </TableCell>
            <TableCell className={classes.cell} numeric>
              Количество
            </TableCell>
            <TableCell className={classes.cell} numeric>
              Цена
            </TableCell>
            <TableCell className={classes.cell} numeric>
              Итог
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(({ label, data }) => (
            <Fragment key={label}>
              <TableRow>
                <TableCell
                  className={cn(classes.headLine, classes.cell)}
                  component="th"
                  scope="row"
                  colSpan={5}
                >
                  {label}
                </TableCell>
              </TableRow>
              {data.map((n, idx) => {
                return (
                  <TableRow key={idx}>
                    <TableCell
                      component="th"
                      scope="row"
                      className={classes.cell}
                    >
                      {n.name}
                    </TableCell>
                    <TableCell className={classes.cell} numeric>
                      {n.measure}
                    </TableCell>
                    <TableCell className={classes.cell} numeric>
                      {n.count}
                    </TableCell>
                    <TableCell className={classes.cell} numeric>
                      {n.price.toLocaleString('ru') + ' ₽'}
                    </TableCell>
                    <TableCell className={classes.cell} numeric>
                      {(n.price * n.count).toLocaleString('ru') + ' ₽'}
                    </TableCell>
                  </TableRow>
                )
              })}
              <TableRow>
                <TableCell
                  className={classes.sum}
                  component="th"
                  scope="row"
                  colSpan={5}
                >
                  {`${label}: ${sumSectionPrice(data).toLocaleString('ru')} ₽`}
                </TableCell>
              </TableRow>
            </Fragment>
          ))}
          <TableRow>
            <TableCell
              className={classes.finalSum}
              component="th"
              scope="row"
              colSpan={5}
            >
              {`Примерная стоимость установки: ${data
                .reduce((sum, { data }) => {
                  const sectionSum = sumSectionPrice(data)
                  return sum + sectionSum
                }, 0)
                .toLocaleString('ru')} ₽`}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  </MuiThemeProvider>
)

export default withStyles(styles)(Estimate)
