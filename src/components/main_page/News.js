import {Button, Link, Typography} from "@material-ui/core";
import React from "react";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Hidden from "@material-ui/core/Hidden";
import CardMedia from "@material-ui/core/CardMedia";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    title: {
        display: "flex",
        justifyContent: 'space-between',
    },
    showAllButton: {
        marginTop: 'auto',
        marginBottom: 2,
        fontSize: 16
    },
    newsGrid: {
      marginTop: 8
    },
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 0,
        paddingRight: '26.25%', //
    },
});

const News = (props) => {
    const classes = useStyles()
    const { news_list } = props

    return (
        <div>
            <div className={classes.title}>
                <Typography variant='h3'>
                    Последние новости
                </Typography>
                <Link className={classes.showAllButton}>
                    Смотреть все
                </Link>
            </div>
            <Grid container direction='row' spacing={1} className={classes.newsGrid}>
                {news_list.map((news) => (
                    <Grid item xs={12} key={news.title} >
                        <CardActionArea component="a" href="#">
                            <Card className={classes.card}>
                                <div className={classes.cardDetails}>
                                    <CardContent>
                                        <Typography component="h2" variant="h5">
                                            {news.title}
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            {news.date}
                                        </Typography>
                                        <Typography variant="subtitle1">
                                            {news.description.split("\n").map((i, key) => {
                                                return <div key={key}>{i}</div>;
                                            })}
                                        </Typography>
                                        <Typography variant="subtitle1" color="primary">
                                            Continue reading...
                                        </Typography>
                                    </CardContent>
                                </div>
                                <Hidden xsDown>
                                    <CardMedia className={classes.cardMedia} image={news.image} title='asdsa' />
                                </Hidden>
                            </Card>
                        </CardActionArea>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}


export default News