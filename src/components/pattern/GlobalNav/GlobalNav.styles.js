const styles = {
    root: {
        backgroundColor: '#343a40',
        height: '4rem',
        padding: '0 2rem',
        '& > div': {
            height: 'inherit'
        }
    },
    navMenu: {
        height: 'inherit',
        '& ul': {
            height: 'inherit',
            margin: 0
        },
        '& ul > li': {
            alignItems: 'center',
            cursor: 'pointer',
            display: 'inline-flex',
            height: 'inherit',
            justifyContent: 'center',
            padding: '0 1rem',
            '&:hover': {
                borderBottom: '2px solid #e1e1e1',
                '& $tempTypographyMain': {
                    color: '#e1e1e1'
                }
            }
        }
    },
    active: {
        borderBottom: '2px solid #c7c7f7 !important',
        '& > p': {
            color: '#c7c7f7 !important'
        }
    },
    tempTypographyMain: {
        color: '#ffffff80'
    },
    tempTypographyLogo: {
        color: '#fff'
    }
}

export default styles;