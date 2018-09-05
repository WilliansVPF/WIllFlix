import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import styles from './style'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import moment from 'moment'

const MovieCard = (props) => {
    return (
        <Card className={props.classes.card}>
            <CardActionArea>
                <CardMedia 
                className={props.classes.media}
                image={props.content.img}
                title={props.content.title}
                />
                <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                    {props.content.title}
                </Typography>
                <Typography component="p">
                    Director: {props.content.director}
                </Typography>
                <Typography component="p">
                    Year: {moment(props.content.year).format('MMM YYYY')}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Like
                </Button>
                <Button size="small" color="primary">
                Show more
                </Button>
            </CardActions>
        </Card>
    )
}

export default withStyles(styles)(MovieCard)
