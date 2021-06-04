import {Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";

import {sections} from "../data/NavigationSections";


const StaffPage = () => {

    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="lg">
                <Header sections={sections} activePanel='Сотрудники'/>
                <main>
                    <Typography>
                        this is 'Сотрудники' page
                    </Typography>
                </main>
            </Container>
            <Footer />
        </React.Fragment>
    )

}

export default StaffPage