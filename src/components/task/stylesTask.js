export const styles = (theme) => ({
    containerTask: {
        backgroundColor: '#fdfdfd',
        marginTop: '1rem',
        padding: '5px 15px 15px 5px'
    },
    taskConcluida: {
        backgroundColor: '#47d147',
    },


    taskHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 10px 5px 0'
    },
    taskTitle: {
        fontSize: '18px',
        fontWeight: '700'
    },

    taskMain: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        flexWrap: 'wrap',
        padding: '10px'
    },

    taskSubtitle: {
        color: 'grey'
    },
    taskFooter: {
        display: 'flex',
        alignItems: 'center',
        gap: '30px',
        justifyContent: 'space-between',
        marginTop: '10px',
        padding: '10px',

    },
    itemFooter: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
})