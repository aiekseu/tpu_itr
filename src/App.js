import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import MainPage from "./panels/MainPage";
import EducationPage from "./panels/EducationPage";
import StructurePage from "./panels/StructurePage";
import SciencePage from "./panels/SciencePage";
import StudentsPage from "./panels/StudentsPage";
import StaffPage from "./panels/StaffPage";


const theme = createMuiTheme({
    colors: {
        tpu_green: '#81BF44'
    }
});

const sections = [
    { title: 'О школе', url: '/' },
    { title: 'Структура', url: '/structure' },
    { title: 'Наука', url: '/science' },
    { title: 'Образование', url: '/education' },
    { title: 'Студентам', url: '/students' },
    { title: 'Сотрудники', url: '/staff' },
];


function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <Switch>
                <Route exact path="/">
                    <MainPage sections={sections}/>
                </Route>
                <Route path="/structure">
                    <StructurePage sections={sections}/>
                </Route>
                <Route path="/science">
                    <SciencePage sections={sections}/>
                </Route>
                <Route path="/education">
                    <EducationPage sections={sections}/>
                </Route>
                <Route path="/students">
                    <StudentsPage sections={sections}/>
                </Route>
                <Route path="/staff">
                    <StaffPage sections={sections}/>
                </Route>
            </Switch>
        </MuiThemeProvider>
    );
}

export default App;
