const styles = {
    root: {
        backgroundImage: (props) => {
            if (props.gradientIn) {
                return 'linear-gradient(#fff, #f2727280)';
            } else if (props.gradientOut) {
                return 'linear-gradient(#f2727280, #fff)';
            } else {
                return null;
            }
        },
        '& > div': {
            alignItems: 'center',
            display: 'flex',
            height: '30rem',
            justifyContent: 'center'
        }
    },
    fullSection: {
        margin: 'auto',
        textAlign: 'center',
        width: '70%'
    },
    splitSection: {
        '& > div': {
            paddingLeft: '8rem',
            paddingRight: '8rem'
        }
    }
}

export default styles;
