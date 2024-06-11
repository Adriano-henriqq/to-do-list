export const styles = (theme) => ({
    container: {
        padding: 0,
    },
    containerDialog: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '10px',
        width: '100%',
        maxWidth: '600px',  
        boxSizing: 'border-box',
    },
    dialogContent: {
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',  
        maxHeight: '80vh', 
        '&::-webkit-scrollbar': {
      display: 'none',
      } 
       
    },
    dialogActions: {
        justifyContent: 'flex-end',
    },
    buttonClosed:{
        backgroundColor: '#d5290a',
        color:'white'
    },
    buttonSubmit:{
        backgroundColor: '#187611',
        color:'white',
        '&:hover':{
            backgroundColor: '#178b0f',
        }
    }
});