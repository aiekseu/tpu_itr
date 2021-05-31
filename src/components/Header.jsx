import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import MenuIcon from '@material-ui/icons/Menu';
import itr_logo from '../images/itr_logo.png'
import {Hidden, Menu, MenuItem} from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.colors.tpu_green}`,
        justifyContent: 'space-between',
    },
    name: {
        display: 'flex',
    },
    logo: {
        maxHeight: '48px',
        margin: 8
    },
    toolbarTitle: {
        fontFamily: 'Open Sans',
        fontWeight: 600,
        marginLeft: 16,
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    nav: {
        right: 0,
        justifyContent: 'space-between',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
        fontSize: 18,
        '&:hover': {
            textDecoration: 'none',
            paddingBottom: 6,
            backgroundImage: 'linear-gradient(to right, #5DB93A, #5DB931)',
            backgroundPosition: 'bottom left',
            backgroundSize: '100% 2px',
            transition: 'background-size .5s ease',
            backgroundRepeat: 'no-repeat',
        },
    },
    activeToolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
        fontSize: 18,
        color: '#5DB93A',
        paddingBottom: 6,
        backgroundImage: 'linear-gradient(to right, #5DB93A, #5DB931)',
        backgroundPosition: 'bottom left',
        backgroundSize: '100% 2px',
        transition: 'background-size .5s ease',
        backgroundRepeat: 'no-repeat',
        '&:hover': {
            textDecoration: 'none',
        },
    },
    menuLink: {
        padding: theme.spacing(1),
    },
    activeMenuLink: {
        padding: theme.spacing(1),
        color: '#5DB93A'
    },
}));

export default function Header(props) {
    const classes = useStyles();
    const {sections, activePanel} = props;

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <Toolbar className={classes.toolbar}>
                <div className={classes.name}>
                    <img src={itr_logo} alt='ТПУ ИШИТР' className={classes.logo}/>
                    <Typography
                        component="h2"
                        variant="h5"
                        color="inherit"
                        align="center"
                        noWrap
                        className={classes.toolbarTitle}
                    >
                        ИШИТР
                    </Typography>
                </div>
                <Hidden smDown>
                    <div className={classes.nav}>
                        {sections.map((section) => (
                            <Link
                                color='inherit'
                                key={section.title}
                                variant="body2"
                                to={section.url}
                                className={activePanel === section.title ? classes.activeToolbarLink : classes.toolbarLink}
                                style={{textDecoration: 'none', color: `${activePanel === section.title ? '#5DB93A': '#000'}`}}
                            >
                                {section.title}
                            </Link>
                        ))}
                    </div>
                </Hidden>

                <Hidden mdUp>
                    <IconButton aria-controls="nav-menu" aria-haspopup="true" onClick={handleClick}>
                        <MenuIcon/>
                    </IconButton>
                    <Menu
                        id="nav-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {sections.map((section) => (
                            <MenuItem
                                component={Link}
                                color='inherit'
                                key={section.title}
                                variant="body2"
                                to={section.url}
                                className={activePanel === section.title ? classes.activeMenuLink : classes.menuLink}
                            >
                                {section.title}
                            </MenuItem>
                        ))}
                    </Menu>
                </Hidden>

            </Toolbar>
        </React.Fragment>
    );
}

Header.propTypes = {
    sections: PropTypes.array,
    activePanel: PropTypes.string
};
