import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TaskList from './components/TaskList';
import CreateTask from './components/CreateTask';
import TaskDetail from './components/TaskDetail';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Task List</Link>
          </li>
          <li>
            <Link to="/create">Create Task</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <TaskList />
        </Route>
        <Route path="/create">
          <CreateTask />
        </Route>
        <Route path="/tasks/:id">
          <TaskDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
