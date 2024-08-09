//modify by Min-Xuan

import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';


import ECommerce from './pages/Dashboard/Dashboard';
import HomePage from './pages/Home/home';
import Home from './components/Pages/home';

import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
// import Home from './pages/Home/home';
import StatisticsPage from './components/Pages/statics';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>


      <Routes>
        {/* Public Routes - No Layout */}
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin   " />
              <SignIn />
            </>
          }
        />

        <Route
          path="/homepage"
          element={
            <>
              <PageTitle title="Signin   " />
              <HomePage />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup   " />
              <SignUp />
            </>
          }
        />

        {/* Routes with Default Layout */}
        <Route element={<DefaultLayout />}>
        <Route
          path="/"
            index
            element={
              <>
                <PageTitle title="Invetz" />
                <ECommerce />
              </>
            }
          />
          <Route
          path="/dashboard"
            index
            element={
              <>
                <PageTitle title="Invetz" />
                <ECommerce />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <PageTitle title="Home" />
                <Home />
              </>
            }
          />
          <Route
            path="/Statics"
            element={
              <>
                <PageTitle title="Statics   " />
                <StatisticsPage />
              </>
            }
          />
          <Route
            path="/forms/form-elements"
            element={
              <>
                <PageTitle title="Form Elements   " />

              </>
            }
          />
          <Route
            path="/forms/form-layout"
            element={
              <>
                <PageTitle title="Form Layout   " />
                <FormLayout />
              </>
            }
          />
          <Route
            path="/tables"
            element={
              <>
                <PageTitle title="Tables   " />
                <Tables />
              </>
            }
          />
          <Route
            path="/settings"
            element={
              <>
                <PageTitle title="Settings   " />
                <Settings />
              </>
            }
          />
          <Route
            path="/chart"
            element={
              <>
                <PageTitle title="Basic Chart   " />

              </>
            }
          />
          <Route
            path="/ui/alerts"
            element={
              <>
                <PageTitle title="Alerts   " />
                <Alerts />
              </>
            }
          />
          <Route
            path="/ui/buttons"
            element={
              <>
                <PageTitle title="Buttons   " />
                <Buttons />
              </>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
