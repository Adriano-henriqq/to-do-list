import React, { Component } from 'react';
import { List, ListItem, Paper, Typography, withStyles,} from '@material-ui/core';
import Done from '@material-ui/icons/Done';
import Assignment from '@material-ui/icons/Assignment';
import Assessment from '@material-ui/icons/Assessment';
import MenuIcon from '@material-ui/icons/Menu';
import { styles } from './styles';



class AsideMenu extends Component {
    state = {
        isAsideOpen: false,
    };

    toggleAside = () => {
        this.setState((prevState) => ({
            isAsideOpen: !prevState.isAsideOpen,
        }));
    };

    render() {
        const { classes } = this.props;
        const { isAsideOpen } = this.state;

        return (
            <>

                <MenuIcon className={classes.menuButton}
                    style={{ color: 'white' }}
                    onClick={this.toggleAside}
                />
                <Paper className={`${classes.aside} ${isAsideOpen ? classes.asideOpen : ''}`}>
                    <Typography variant="h6" className={classes.title}>
                        <Done /> To-do
                    </Typography>
                    <hr className={classes.lineTop} />
                    <div className={classes.container}>
                        <List>
                            <ListItem>
                                <Typography className={classes.listItem}>
                                    <Assignment /> Tarefas
                                </Typography>
                            </ListItem>
                            
                        </List>
                    </div>
                </Paper>
            </>
        );
    }
}

export default withStyles(styles)(AsideMenu);
