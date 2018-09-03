import axios from "axios"
import React from "react"
import Navbar from './components/Navbar'
import { withStyles } from '@material-ui/core/styles'
import MovieCard from './components/MovieCard'


const styles = { 
    body: {
        padding: '45px 50px 0 50px' ,
        display: 'flex',

    }
}

class App extends React.PureComponent {
    constructor(props){
        super(props)
        this.state = {movies:[], error:false}
    }
    
    componentDidMount() {
        axios.get("https://express-server2.herokuapp.com/movie").then( (response) => {            
            this.setState({movies:response.data})
        }).catch( () => {
            this.setStnull({error:true})
        })
    }   
            
    render() {        
        return ( 
            <div>
                <Navbar />
                <div className={this.props.classes.body}>{
                    this.state.movies.map((movie) => {
                        return <MovieCard content={movie} />
                    }) 
                }</div>
            </div>
        )
    }
    
}

export default withStyles(styles)(App)
