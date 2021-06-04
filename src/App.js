import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
import {createMuiTheme, MuiThemeProvider, responsiveFontSizes} from "@material-ui/core";
import MainPage from "./panels/MainPage";
import EducationPage from "./panels/EducationPage";
import StructurePage from "./panels/StructurePage";
import SciencePage from "./panels/SciencePage";
import StudentsPage from "./panels/StudentsPage";
import StaffPage from "./panels/StaffPage";

import {sections} from "./data/NavigationSections";


let theme = createMuiTheme({
    colors: {
        tpu_green: '#81BF44'
    }
});



function App() {
    theme = responsiveFontSizes(theme)

    return (
        <MuiThemeProvider theme={theme}>
            <Switch>
                <Route exact path="/">
                    <MainPage />
                </Route>
                <Route path="/structure">
                    <StructurePage />
                </Route>
                <Route path="/science">
                    <SciencePage />
                </Route>
                <Route path="/education">
                    <EducationPage />
                </Route>
                <Route path="/students">
                    <StudentsPage />
                </Route>
                <Route path="/staff">
                    <StaffPage />
                </Route>
            </Switch>
        </MuiThemeProvider>
    );
}

export default App;
