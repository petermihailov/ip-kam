import React, { Component, Fragment } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'

import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import OrderDialog from '../components/order-dialog/order-dialog'
import './index.css'

const theme = createMuiTheme({
  palette: {
    primary: red,
    type: 'light',
  },
})

class Layout extends Component {
  state = {
    orderFormIsOpen: false,
    orderFormTitle: '',
  }

  closeForm = () => this.setState({ orderFormIsOpen: false })

  openForm = (orderFormTitle = 'Обратный звонок') =>
    this.setState({ orderFormTitle, orderFormIsOpen: true })

  render() {
    const { children, location } = this.props
    const { orderFormIsOpen, orderFormTitle } = this.state

    return (
      <MuiThemeProvider theme={theme}>
        <Fragment>
          <Header location={location.pathname} />
          <div>{children({ ...this.props, openForm: this.openForm })}</div>
          <Footer />
          <OrderDialog
            open={orderFormIsOpen}
            title={orderFormTitle}
            onClose={this.closeForm}
          />
        </Fragment>
      </MuiThemeProvider>
    )
  }
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
