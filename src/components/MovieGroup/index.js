import React from 'react'
import styles from './style'
import MovieCard from '../MovieCard'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const MovieGroup = (props) => { 
    return (
        <div>
            {
                props.favoriteMovies.length > 0 ? (
                    <div>
                        <Typography variant="display1">
                            Favorites
                        </Typography>
                        <div className={props.classes.line}>
                            {
                                props.favoriteMovies.map((movie) => {
                                    return <MovieCard key={movie._id} content={movie} />
                                }) 
                            }                    
                        </div>
                    </div>
                ) : null
            }
            {
               props.movies.length > 0 ? (
                    <div>
                        <Typography variant="display1">
                            Movies
                        </Typography>
                        <div className={props.classes.line}>
                            {
                                props.movies.map((movie) => {
                                    return <MovieCard key={movie._id} content={movie} />
                                }) 
                            }                    
                        </div>
                    </div>
                ) : null
            }                    
        </div>
    )
}    

export default withStyles(styles)(MovieGroup)