import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import Grid from '@material-ui/core/Grid'
import Radio from '@material-ui/core/Radio'

import img0 from './img/ipkam_0000_orher.jpg'
import img1 from './img/ipkam_0001_kvartira.jpg'
import img2 from './img/ipkam_0002_restoran.jpg'
import img3 from './img/ipkam_0003_mojka.jpg'
import img4 from './img/ipkam_0004_magazin.jpg'
import img5 from './img/ipkam_0005_apteka.jpg'
import img6 from './img/ipkam_0006_strojka.jpg'
import img7 from './img/ipkam_0007_home.jpg'

const data = [
  {
    title: 'Квартира',
    img: img1,
  },
  {
    title: 'Дом',
    img: img7,
  },
  {
    title: 'Аптека',
    img: img5,
  },
  {
    title: 'Магазин',
    img: img4,
  },
  {
    title: 'Стройка',
    img: img6,
  },
  {
    title: 'Мойка',
    img: img3,
  },
  {
    title: 'Ресторан',
    img: img2,
  },
  {
    title: 'Другое',
    img: img0,
  },
]

const styles = theme => ({
  container: {
    position: 'relative',
    color: '#fff',
  },
  img: {
    display: 'block',
    height: 90,
    objectFit: 'cover',
  },
  radio: {
    color: 'inherit',
  },
})

class TypeQuestion extends React.Component {
  render() {
    const { value, onChange, classes } = this.props

    return (
      <Grid container spacing={8}>
        {data.map(({ img, title }, idx) => (
          <Grid key={img} item xs={6}>
            <div className={classes.container}>
              <img className={classes.img} src={img} alt="" />
              <GridListTileBar
                title={title}
                actionIcon={
                  <Radio
                    className={classes.radio}
                    name="type"
                    value={idx.toString()}
                    checked={value === idx.toString()}
                    onChange={onChange}
                  />
                }
              />
            </div>
          </Grid>
        ))}
      </Grid>
    )
  }
}

export default withStyles(styles)(TypeQuestion)
