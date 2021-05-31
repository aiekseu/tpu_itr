import {Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import Header from "../components/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import MainFeaturedNews from "../components/main_page/MainFeaturedNews";
import Grid from "@material-ui/core/Grid";
import News from "../components/main_page/News";
import Footer from "../components/Footer";
import React from "react";


const EducationPage = ({sections}) => {

    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="lg">
                <Header sections={sections} activePanel='Образование'/>
                <main>
                    <Typography>
                        this is 'Образование' page
                    </Typography>
                </main>
            </Container>
            <Footer />
        </React.Fragment>
    )

}

export default EducationPage