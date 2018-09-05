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
        this.state = {movies:[], moviesClone:[], error:false}
        this.serch = this.serch.bind(this);
    }
    
    componentDidMount() {
        axios.get("https://express-server2.herokuapp.com/movie").then( (response) => {            
            this.setState({movies:response.data, moviesClone:[...response.data]})
        }).catch( () => {
            this.setState({error:true})
        })
    }
    
    serch(event){        
        const expression = event.target.value
        const result = [] 
        if (expression.length === 0) {
            this.setState({movies:this.state.moviesClone})
        }
        this.state.moviesClone.forEach(element => {
            if (element.title.indexOf(expression)!== -1){
                result.push(element)
            }
        });        
        this.setState({movies:result})
    }
            
    render() {        
        return ( 
            <div>
                <Navbar onSearch={ this.serch } />
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
