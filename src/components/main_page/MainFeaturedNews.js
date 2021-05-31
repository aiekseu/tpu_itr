import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Button from "@material-ui/core/Button";

import bg from '../../images/bg.png'

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    height: 600,
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: `url(${bg})`,
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
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function MainFeaturedNews(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Paper className={classes.mainFeaturedPost} >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={bg} alt={post.imageText} />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={8}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.description}
            </Typography>
            <Button style={{color: '#fff'}}>
              {post.linkText}
            </Button>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedNews.propTypes = {
  post: PropTypes.object,
};