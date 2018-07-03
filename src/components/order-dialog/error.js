import React, { Component } from 'react'
import cn from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import iconStyles from './icon-styles.module.scss'
import { phones } from './../../../data/contacts'
import bgImg from './failed.jpg'

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

class Error extends Component {
  render() {
    const { classes } = this.props

    return (
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={bgImg}>
          <svg
            className={classes.image}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 130.2 130.2"
          >
            <circle
              className={cn(iconStyles.path, iconStyles.circle)}
              fill="none"
              stroke="#f44336"
              strokeWidth="6"
              strokeMiterlimit="10"
              cx="65.1"
              cy="65.1"
              r="62.1"
            />
            <line
              className={cn(iconStyles.path, iconStyles.line)}
              fill="none"
              stroke="#f44336"
              strokeWidth="6"
              strokeLinecap="round"
              strokeMiterlimit="10"
              x1="34.4"
              y1="37.9"
              x2="95.8"
              y2="92.3"
            />
            <line
              className={cn(iconStyles.path, iconStyles.line)}
              fill="none"
              stroke="#f44336"
              strokeWidth="6"
              strokeLinecap="round"
              strokeMiterlimit="10"
              x1="95.8"
              y1="38"
              x2="34.4"
              y2="92.2"
            />
          </svg>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Что-то пошло не так 😔
          </Typography>
          <Typography component="p">
            Ваша заявка не была отправлена из-за технической неисправности, но
            не расстраивайтесь, вы можете сделать по телефону
          </Typography>
        </CardContent>
        <CardActions>
          {phones.map(({ label, value }) => (
            <Button
              key={value}
              size="small"
              color="primary"
              component="a"
              href={'tel:' + value}
            >
              {label}
            </Button>
          ))}
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(styles)(Error)
