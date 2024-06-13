export const styles = (theme) => ({
    aside: {
        width: '300px',
        background: '#363636',
        border: '2px solid #3b3b3b',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        boxSizing: 'border-box',
        borderRadius: '0',
        zIndex: 1000,

        [theme.breakpoints.down('sm')]: {
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100%',
            width: '200px',
            transform: 'translateX(-100%)',
            transition: 'transform 0.3s ease-in-out',
            zIndex: 1000
        },
    },
    asideOpen: {
        transform: 'translateX(0)',
    },
    title: {
        marginTop: '15px',
        fontSize: '2rem',
        textAlign: 'center',
        color: 'white',
    },
    lineTop: {
        width: '100%'
    },
    container: {
        display: 'flex',
        marginTop: '15px',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    listItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        fontSize: '1rem',
        color: '#c5c5c5',
        cursor: 'pointer'
    },
    menuButton: {
        position: 'fixed',
        top: 10,
        left: 10,
        zIndex: 1300,
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
        backgroundColor: 'black',
        borderRadius: '5px',
        padding: '5px',
        marginRight: '5px',

    }
});