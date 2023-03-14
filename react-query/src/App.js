import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import RQSuperHeroes from "./components/RQSuperHeroes";
import SuperHeroesPage from "./components/SuperHeroes.page";
import HomePage from "./components/Home.page";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = QueryClient();

function App() {
  return (
    <QueryClientProvider queryClient={queryClient}>
      <Router>
        <div>
          <nav>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/super-heroes">Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to="/rq-super-heroes"></Link>
            </li>
          </nav>
          <Routes>
            <Route path="/super-heroes">
              <SuperHeroesPage />
            </Route>
            <Route path="/rq-super-heroes">
              <RQSuperHeroes />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
