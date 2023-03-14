import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import SuperHeroesPage from "./components/SuperHeroes.page";
import RQSuperHeroesPage from "./components/RQSuperHeroes.page";
import HomePage from "./components/Home.page";
import MyComponent from "./components/myComponent";
import RQSuperHeroPage from "./components/RQSuperHero.page";
import ParallelQueriesPage from "./components/ParallelQueries.page";
import PaginatedQueriesPage from "./components/PaginatedQueries.page";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
              <li>
                <Link to="/my-component">My Component</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/rq-paginated"
              element={<PaginatedQueriesPage />}
            ></Route>
            <Route
              path="/rq-parallel"
              element={<ParallelQueriesPage />}
            ></Route>
            <Route
              path="/rq-super-heroes/:heroId"
              element={<RQSuperHeroPage />}
            ></Route>

            <Route path="/super-heroes" element={<SuperHeroesPage />}></Route>

            <Route
              path="/rq-super-heroes"
              element={<RQSuperHeroesPage />}
            ></Route>

            <Route path="/" element={<HomePage />}></Route>

            <Route path="my-component" element={<MyComponent />}></Route>
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
