import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import styles from './style'
import TextField from '@material-ui/core/TextField'

const Navbar = (props) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Button color="inherit">
                    Menu
                </Button>  
                <Typography variant="title" color="inherit" className={ props.classes.flex }>WillFlix</Typography>    
                <TextField onChange={ props.onSearch }                   
                    InputProps={{
                        placeholder: 'Search',
                        disableUnderline: true,
                        classes: {            
                            input: props.classes.bootstrapInput,
                        },
                    }}
                    InputLabelProps={{
                        shrink: true
                    }}
                />
            </Toolbar>
        </AppBar>
    )
}

export default withStyles(styles)(Navbar)
