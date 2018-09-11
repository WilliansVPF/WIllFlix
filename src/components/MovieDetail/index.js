import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import styles from './style'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'
import { Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'
import { FaceIcon } from '@material-ui/icons'

class MovieDetail extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            movie: {}
        }
        this.getMovie = this.getMovie.bind(this)
    }

    componentDidMount(){
        this.getMovie(this.props.match.params.id)
    }

    getMovie(id) {        
        axios.get(`https://express-server2.herokuapp.com/movie/${id}`).then( (response) => {            
            this.setState({movie:response.data})
        }).catch( () => {
            this.setState({error:true})
        })
    }

    render(){
        return (
            <div>
              <Dialog
                open={true}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">{this.state.movie.title}</DialogTitle>
                <DialogContent>
                    <div className={this.props.classes.modalBody}>
                        <img src={this.state.movie.img}/>
                        <div className={this.props.classes.modalBodyRightContent}>
                            <Chip color="primary" avatar={<Avatar><FaceIcon /></Avatar>} variant="outlined" label={this.state.movie.director}/>

                        </div>
                    </div>

                </DialogContent>
                <DialogActions>
                  <Link to="/">
                    <Button color="primary">
                        Close
                    </Button>
                  </Link>
                  
                </DialogActions>
              </Dialog>
            </div>
          )
    }

}

export default withStyles(styles)(MovieDetail)