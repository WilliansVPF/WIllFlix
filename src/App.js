import axios from "axios"
import React from "react"
import Navbar from './components/Navbar'
import { withStyles } from '@material-ui/core/styles'
import MovieGroup from './components/MovieGroup'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import MovieDetail from './components/MovieDetail'

const styles = { 
    body: {
        padding: '45px 50px 0 50px'
    },    
    line: {
        display: 'flex',
        margin: '10px 0 10px 0',
        backgroundColor: '#f3f3f3',
        borderRadius: '5px'

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
        
        const movies = () => <MovieGroup 
            movies={this.state.movies} 
            favoriteMovies={this.state.favoriteMovies} 
            classes={this.props.classes} 
        />
        
        return ( 
            <div>                
                <Navbar onSearch={ this.serch } />
                <BrowserRouter>
                    <div className={this.props.classes.body}>
                        <Route path="/" render={movies} />
                        <Route path="/movie/:id" exact component={MovieDetail} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
    
}

export default withStyles(styles)(App)

