import React from 'react'
import { withStyles } from '@material-ui/core/styles/index'

const s = () => ({
  map: {
    display: 'block',
  },
})

const MapSection = ({ classes }) => (
  <iframe
    className={classes.map}
    width="100%"
    height="350"
    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2251.450663709338!2d37.66446596592637!3d55.64637018052502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0JrQsNGI0LjRgNGB0LrQvtC1INGILiwgNTAg0LrQvtGA0L_Rg9GBIDLQkCwg0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8sIDExNTQwOQ!5e0!3m2!1sru!2sru!4v1527847295533"
    frameBorder="0"
    allowFullScreen
  />
)

export default withStyles(s)(MapSection)
