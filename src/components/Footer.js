import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import itr_logo from '../images/itr_logo2.png'
import {Grid} from "@material-ui/core";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center" style={{marginTop: 12, textAlign: 'right', paddingTop: 0, color: '#55663080'}}>
            <Link color="inherit" href="https://tpu.ru/" style={{textDecoration: 'underline', color: '#000'}}>
                {'Томский политехнический университет'}
            </Link>
            <br/>
            <br/>
            {'Copyright ©'}
            {new Date().getFullYear()}
            <br/>
            {' При полном или частичном использовании материалов с сайта ссылка на сайт ТПУ обязательна'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 0),
    },
    logo: {
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    name: {
        marginBottom: 8
    }
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg">
                <Grid container direction='row' spacing={2} alignItems='center'>
                    <Grid item xs={12} sm={2} md={2}>
                        <img src={itr_logo} className={classes.logo} alt={'itr_logo'}/>
                    </Grid>
                    <Grid item className={classes.name} sm={10} md={6}>
                        <Typography variant='h6'>
                            Инженерная школа информационных технологий и робототехники
                        </Typography>
                        <Typography variant='subtitle1'>
                            ул. Советская, 84/3, Кибернетический центр, офис 309
                        </Typography>
                        <Typography variant='subtitle1'>
                            +7 (3822) 606-100
                        </Typography>
                    </Grid>

                    <Grid item sm={12} md={4}>
                        <Copyright/>
                    </Grid>

                </Grid>


            </Container>
        </footer>
    );
}

Footer.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
};
