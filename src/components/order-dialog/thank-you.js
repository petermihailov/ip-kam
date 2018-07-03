import React, { Component } from 'react'
import cn from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import iconStyles from './icon-styles.module.scss'
import bgImg from './success.jpg'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    position: 'relative',
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  image: {
    position: 'absolute',
    height: 100,
    width: 100,
    top: '50%',
    left: '50%',
    transform: 'translateY(-50%) translateX(-50%)',
    padding: 4,
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.6)',
  },
}

class ThankYou extends Component {
  render() {
    const { classes } = this.props

    return (
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={bgImg}>
          <div className={classes.image}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 130.2 130.2"
            >
              <circle
                className={cn(iconStyles.path, iconStyles.circle)}
                fill="none"
                stroke="#3c4"
                strokeWidth="6"
                strokeMiterlimit="10"
                cx="65.1"
                cy="65.1"
                r="62.1"
              />
              <polyline
                className={cn(iconStyles.path, iconStyles.check)}
                fill="none"
                stroke="#3c4"
                strokeWidth="8"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="100.2,40.2 51.5,88.8 29.8,67.5 "
              />
            </svg>
          </div>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Спасибо за заявку!
          </Typography>
          <Typography component="p">
            В течении нескольких минут наши менеджеры свяжутся с вами
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(ThankYou)
