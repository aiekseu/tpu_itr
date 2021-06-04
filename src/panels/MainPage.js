import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Typography} from "@material-ui/core";
import News from "../components/main_page/News";


import {sections} from "../data/NavigationSections";
import ProgramsOverview from "../components/main_page/ProgramsOverview";

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));

const featuredPosts = [
    {
        title: 'Поддержи ПОЛИТЕХНИКОВ на предварительном голосовании прямо сейчас!',
        date: '28 мая 2021',
        description:
            '✅Перейди по ссылке Pg.er.ru/login\n' +
            '✅Введи адрес Томской прописки\n' +
            '✅Поддержи политехников',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
    },
];

export default function MainPage() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header sections={sections} activePanel='О школе'/>
                <main>
                    <ProgramsOverview/>

                    <Grid container direction='row' spacing={4}>
                        <Grid item md={7} sm={12}>
                            <News news_list={featuredPosts}/>
                        </Grid>
                        <Grid item container direction='column' md={5} sm={12}>
                            <Grid item>
                                <Typography variant='h3'>
                                    Объявления
                                </Typography>
                                <Typography >
                                    Объявление
                                </Typography>
                                <Typography >
                                    Объявление
                                </Typography>
                                <Typography >
                                    Объявление
                                </Typography>
                                <Typography >
                                    Объявление
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='h3'>
                                    Видео
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </main>
            </Container>
            <Footer/>
        </React.Fragment>
    );

}
