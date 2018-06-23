import React from 'react'
import Typography from '@material-ui/core/Typography'
import s from './header-banner.module.scss'

const HeaderBanner = ({ title, description, children }) => (
  <div className={s.root}>
    {title ? (
      <Typography color="inherit" variant="display1">
        {title}
      </Typography>
    ) : null}
    {description ? (
      <Typography color="inherit" paragraph>
        {description}
      </Typography>
    ) : null}
    {children}
  </div>
)

export default HeaderBanner
