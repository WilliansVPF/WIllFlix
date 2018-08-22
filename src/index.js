import { render } from "react-dom"
import React from "react"
import axios from "axios"

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
        const moviesHtml = this.state.movies.map((movie) => {
            return <img src={movie.img} width="100" />
        })
        return moviesHtml
    }
}
render(<App />, document.getElementById("App"))