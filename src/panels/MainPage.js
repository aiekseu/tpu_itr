import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from '../components/Header';
import MainFeaturedNews from '../components/main_page/MainFeaturedNews';
import Footer from '../components/Footer';
import {Typography} from "@material-ui/core";
import News from "../components/main_page/News";

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));

const mainFeaturedPost = {
    title: 'Летние школы по IT и робототехнике в ТПУ!',
    description:
        "С 28 июня по 23 июля приглашаем студентов, абитуриентов и молодых ученых прослушать лекции от ведущих ученых ТПУ, Сколковского института науки и технологий, а также представителей крупных IT компаний.",
    imgText: 'main image description',
    linkText: 'Читать далее',
};

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
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
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

const sidebar = {
    title: 'About',
    description:
        'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
    archives: [
        { title: 'March 2020', url: '#' },
        { title: 'February 2020', url: '#' },
        { title: 'January 2020', url: '#' },
        { title: 'November 1999', url: '#' },
        { title: 'October 1999', url: '#' },
        { title: 'September 1999', url: '#' },
        { title: 'August 1999', url: '#' },
        { title: 'July 1999', url: '#' },
        { title: 'June 1999', url: '#' },
        { title: 'May 1999', url: '#' },
        { title: 'April 1999', url: '#' },
    ],
    social: [
        { name: 'GitHub', icon: GitHubIcon },
        { name: 'Twitter', icon: TwitterIcon },
        { name: 'Facebook', icon: FacebookIcon },
    ],
};

export default function MainPage({sections}) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header sections={sections} activePanel='О школе'/>
                <main>
                    <MainFeaturedNews post={mainFeaturedPost} />

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
