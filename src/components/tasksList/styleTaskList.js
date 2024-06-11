export const styles = (theme) => ({
    container: {
        marginLeft: '60px',
        width: '100%',
        maxWidth: '80%',
        marginTop: 20,
        [theme.breakpoints.down('sm')]: {
            marginLeft: '40px'
        },
        
    },

    title: {
        fontSize: '20px',
        fontWeigth: 'bold',
        color: 'grey',
        marginBottom: '1rem',
        marginLeft: '1rem'
    },
    lineTop: {
        width: '100%',
        marginLeft: '1rem'

        
    },
    containerButtons: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '1rem'
    },
    button: {
        padding: '10px',
    },

    taskList:{
        overflowY: 'scroll',
        maxHeight:'600px',
        '&::-webkit-scrollbar': {
      display: 'none',
      },
      [theme.breakpoints.down('sm')]: {
       maxHeight:'700px'
    },
      
    }
    
})
