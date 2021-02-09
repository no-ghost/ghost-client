import 'react-dropzone-uploader/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactHeap from 'reactjs-heap';
import axios from 'axios';
import Home from './home/Home';
// import Tutorial from './Tutorial';
import Submit from './home/Submit';
import config from './constants';
import RoleProtectedRoute from './routes/roleProtectedRoute';
import SignupReviewee from './navbar/SignupReviewee';
import Layout from './Layout';
import SignUpReviewer from './navbar/SignupReviewer';
import Login from './navbar/Login';
import ReviewerDashboard from './reviewerDashboard/ReviewerDashboard';

ReactHeap.initialize('497288854');

// const buyer = <div>buyer</div>;
axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signupReviewee">
          <SignupReviewee />
        </Route>
        <Route exact path="/signupReviewer">
          <SignUpReviewer />
        </Route>

        <RoleProtectedRoute desiredRole={config.REVIEWEE} path="/revieweeDashboard">
          <Submit />
        </RoleProtectedRoute>
        <RoleProtectedRoute desiredRole={config.REVIEWER} path="/reviewerDashboard">
          <ReviewerDashboard />
        </RoleProtectedRoute>

        <Layout>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/faq">
            <div>faq</div>
          </Route>
          <Route exact path="/pricing">
            <div>pricing</div>
          </Route>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
