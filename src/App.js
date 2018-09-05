import axios from "axios"
import React from "react"
import Navbar from './components/Navbar'
import { withStyles } from '@material-ui/core/styles'
import MovieCard from './components/MovieCard'
import Typography from '@material-ui/core/Typography'

const styles = { 
    body: {
        padding: '45px 50px 0 50px'
    },    
    favorites: {
        display: 'flex'
    },
    movies: {
        display: 'flex'
    }
}

class App extends React.PureComponent {
    constructor(props){
        super(props)
        this.state = {movies:[], favoriteMovies:[], error:false}
        this.serch = this.serch.bind(this)
        this.getMovies = this.getMovies.bind(this)
    }
    
    componentDidMount() {
        this.getMovies()
        this.getFavoriteMovies()
    }

    getMovies(query='') {        
        axios.get(`https://express-server2.herokuapp.com/movie?like=false${query}`).then( (response) => {            
            this.setState({movies:response.data})
        }).catch( () => {
            this.setState({error:true})
        })
    }

    getFavoriteMovies(query='') {        
        axios.get(`https://express-server2.herokuapp.com/movie?like=true${query}`).then( (response) => {            
            this.setState({favoriteMovies:response.data})
        }).catch( () => {
            this.setState({error:true})
        })
    }
    
    serch(proxy, target){      
        const expression = target.value
        this.getMovies(`&title=${expression}`)
        this.getFavoriteMovies(`&title=${expression}`)
    }
            
    render() {        
        return ( 
            <div>
                <Navbar onSearch={ this.serch } />
                <div className={this.props.classes.body}>
                    <Typography variant="headLine" gutterBottom>
                        Favorites
                    </Typography>
                    <div className={this.props.classes.favorites}>
                        {
                            this.state.favoriteMovies.map((movie) => {
                                return <MovieCard content={movie} />
                            }) 
                        }                    
                    </div>
                    <Typography variant="headLine" gutterBottom>
                        Movies
                    </Typography>
                    <div className={this.props.classes.movies}>
                        {
                            this.state.movies.map((movie) => {
                                return <MovieCard content={movie} />
                            }) 
                        }                    
                    </div>
                </div>
            </div>
        )
    }
    
}

export default withStyles(styles)(App)

