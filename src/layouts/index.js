import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import OrderDialog from '../components/order-dialog/order-dialog'
import './index.css'

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
      <Fragment>
        <Header location={location.pathname}/>
        <div>{children({ ...this.props, openForm: this.openForm })}</div>
        <Footer />
        <OrderDialog onClose={this.closeForm} open={orderFormIsOpen} />
      </Fragment>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func,
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
