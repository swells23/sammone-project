const styles = {
    '@keyframes anim-lineUp': {
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        }
    },
    root: {
        height: 'calc(100vh - 4rem)',
        position: 'relative'
    },
    heroTextWrapper: {
        maxWidth: '16.5rem',
        marginLeft: '10rem',
        position: 'absolute',
        textAlign: 'center',
        top: '40%',
    },
    heroTextDivider: {
        backgroundColor: '#ffffff80',
        borderColor: '#ffffff80',
        borderWidth: '.5px'
    },
    section1: {
        backgroundImage: 'linear-gradient(to right, #a83b61, #e8ae74)'
    },
    column1: {
        alignContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        '& > h2': {
            animation: '2s anim-lineUp ease-out infinite'
        }
    },
    column2: {
        clipPath: 'polygon(0% 0%, 100% 0, 100% 100%, 0 100%)',
        maxHeight: '30rem',
        // '&::after': {
        //     backgroundColor: '#000',
        //     content: '""',
        //     height: '100%',
        //     opacity: '0.2',
        //     position: 'absolute',
        //     right: 0,
        //     top: 0,
        //     width: '100%'
        // },
        '& > div': {
            // border: '.125rem solid #a83b61',
            // margin: '0 0 -.25rem 0'
            '& > div': {
                '& > div': {
                    '& > div': {
                        borderRadius: '2%'
                    }
                }
            }
        }
    },
    waveSvg: {
        position: 'relative',
        top: '-.5px'
    },
    socialWrapper: {
        alignItems: 'center',
        display: 'flex',
        height: '4rem',
        justifyContent: 'center',
        '& svg': {
            marginLeft: '1rem',
            marginRight: '1rem',
            transition: '.3s',
            transitionTimingFunction: 'ease-in-out',
            '&:hover': {
                cursor: 'pointer',
                height: '4rem',
                marginLeft: '.25rem',
                marginRight: '.25rem',
                width: '4rem'
            }
        }
    }
}

export default styles;
