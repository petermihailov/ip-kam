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
  }

  closeForm = () => this.setState({ orderFormIsOpen: false })
  openForm = () => this.setState({ orderFormIsOpen: true })

  render() {
    const { children, location } = this.props
    const { orderFormIsOpen } = this.state

    return (
      <MuiThemeProvider theme={theme}>
        <Fragment>
          <Header location={location.pathname} />
          <div>{children({ ...this.props, openForm: this.openForm })}</div>
          <Footer />
          <OrderDialog onClose={this.closeForm} open={orderFormIsOpen} />
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
