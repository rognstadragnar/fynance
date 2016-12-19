import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MainLayout from './components/MainLayout';
import LoginLayout from './components/LoginLayout';

import IndexPage from './components/Index/IndexPage';
import AboutPage from './components/About/AboutPage';
import WorkPage from './components/Work/WorkPage';
import ContactPage from './components/Contact/ContactPage';
import SignupPage from './components/Signup/SignupPage';
import LoginPage from './components/Login/Loginpage';
import ProfilePage from './components/Profile/ProfilePage';
import NotFoundPage from './components/NotFound/NotFoundPage';
import requireAuth from './utils/requireAuth';


export default (
    <Route>
        <Route component={LoginLayout}>
            <Route path='login' component={LoginPage} />
            <Route path='signup' component={SignupPage} />
        </Route>
        <Route path='/' component={MainLayout} >
            <IndexRoute component={requireAuth(IndexPage)} />
            <Route path='about' component={requireAuth(AboutPage)} />
            <Route path='work' component={requireAuth(WorkPage)} />
            <Route path='contact' component={requireAuth(ContactPage)} />
            <Route path='profile' component={requireAuth(ProfilePage)} />
        </Route>
        <Route component={LoginLayout}>
            <Route path='*' component={NotFoundPage} />
        </Route>
    </Route>
)
