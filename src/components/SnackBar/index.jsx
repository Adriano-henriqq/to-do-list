import { Snackbar } from "@material-ui/core";
import React,{ Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import { styles } from "./stylesSnack";



class SnackBar extends Component {
    state = { open: false } 
    
      handleClose = () => {
        this.setState({ open: false });
      };

      componentDidUpdate(prevProps) {
        if (prevProps.resposta !== this.props.resposta && this.props.resposta) {
          this.setState({ open: true });
        }

      }

    render() { 
        const {conteudo, classes} = this.props;
        const {open} = this.state;
        return (
            <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal:'left' }}
            open={open}
            onClose={this.handleClose}
            autoHideDuration={2000}
            ContentProps={{
              'aria-describedby': 'message-id',
              className: classes.snack
            }}
            message={<span id="message-id">{conteudo}</span>}
          />
        );
    }
}
 
export default withStyles(styles)(SnackBar);
