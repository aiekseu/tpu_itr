import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper, Button, colors} from '@material-ui/core'

import {specializationsList} from '../../data/SpecializationsList'
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
    root: {

    },
    specialization: {
        position: 'relative',
        height: 400,
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.4)',
    },
    specializationContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
    li: {
      marginBottom: 8
    },
    indicatorsContainer: {
        marginTop: -20,
    },
    indicator: {
        '&:hover': {
            color: theme.colors.tpu_green
        },
    },
    activeIndicator: {
        color: theme.colors.tpu_green
    },
    moreButton: {
        color: theme.palette.common.white,
        border: '2px solid white',
    }
}));


const ProgramsOverview = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Carousel
            swipe={true}
            fullHeightHover
            animation='slide'
            timeout={300}
            interval={8000}
            indicatorContainerProps={{className: classes.indicatorsContainer}}
            indicatorIconButtonProps={{className: classes.indicator}}
            activeIndicatorIconButtonProps={{className: classes.activeIndicator}}
            >
                {specializationsList.map((specialization, i) =>
                    <Specialization
                        key={i} specialization={specialization}/>
                )}
            </Carousel>
        </div>
    )

}


const Specialization = (props) => {
    const classes = useStyles();
    const {specialization} = props;

    return (
        <Paper className={classes.specialization} style={{backgroundImage: `url(${specialization.image})`}}>
            {<img style={{display: 'none'}} src={specialization.image} alt={specialization.name}/>}
            <div className={classes.overlay}/>
            <Grid container>
                <Grid item zeroMinWidth>
                    <div className={classes.specializationContent}>
                        <Typography variant="h1" color="inherit" gutterBottom>
                            {specialization.name}
                        </Typography>
                        <Typography variant="h4" color="inherit">
                            <ul>
                                {specialization.directions.map((item, i) => <li key={i} className={classes.li}>{item}</li>)}
                            </ul>
                        </Typography>
                        <Button variant="outlined" size='large' className={classes.moreButton}>
                            Подробнее
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    )
}


export default ProgramsOverview