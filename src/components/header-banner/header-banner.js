import React, {Fragment} from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

const s = theme => ({
  root: {
    padding: theme.spacing.unit * 4,
    textAlign: 'center',
    color: '#fff',
    backgroundImage:
      'linear-gradient(160deg, rgb(7, 20, 34) 10%, rgb(11, 32, 56) 80%)',
    overflow: 'hidden',
  },
  divider: {
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    margin: `${theme.spacing.unit * 2}px auto`,
    maxWidth: '66%',
  }
})

const HeaderBanner = ({ classes, title, description, children }) => (
  <div className={classes.root}>
    {title ? (
      <Typography color="inherit" variant="display1">
        {title}
      </Typography>
    ) : null}
    {description ? (
      <Fragment>
        <Divider className={classes.divider} />
        <Typography color="inherit" paragraph>
          {description}
        </Typography>
      </Fragment>
    ) : null}
    {children}
  </div>
)

export default withStyles(s)(HeaderBanner)
