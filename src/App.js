import './App.css';
import HomePage from './pages/home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFoundPage from './pages/notFound';
import { ProjectsPage } from './pages/projects/projectsPage';

function App() {
    return (
        <div className="App">
            {/* BACKDROP */}
            <div
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundImage: `url("../assets/img/intro.jpg")`,
                    backgroundSize: 'cover',
                    filter: `blur(6px)`,
                    zIndex: -10,
                }}
            ></div>
            <Router>
                <Switch>
                    <Route exact path={`/`}>
                        <HomePage />
                    </Route>
                    <Route exact path={`/projects`}>
                        <ProjectsPage />
                    </Route>
                    <Route path={`/projects/:projectID`}>
                        <h1>Projects</h1>
                    </Route>
                    <Route path={`/contact`}>
                        <h1>Contact</h1>
                    </Route>
                    <Route path={`*`}>
                        <NotFoundPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
