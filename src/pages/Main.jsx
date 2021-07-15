import Skeleton from '../components/Skeleton'
import Contact from '../components/Contact/Contact'
import Home from '../components/Home/Home'
import Projects from '../components/Projects/Projects'
import About from '../components/About/About'
import { Route, Switch } from "react-router-dom";

function Main () {
  return(
      <Skeleton>
        <Switch>
        <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Skeleton>
  );
}

const HomePage = () => <Home />
const AboutPage = () => <About />
const ContactPage = () => <Contact />
const ProjectsPage = () => <Projects />

export default Main;