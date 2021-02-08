import React, {Suspense, useEffect} from 'react';
import {Switch, Route, useLocation} from 'react-router-dom';
import {useDispatch} from "react-redux";

const AdminPage = React.lazy(() => import('./AdminPage'));
const SchoolClassPage = React.lazy(() => import('./SchoolClassPage'));
const LoginFormContainer = React.lazy(() => import('./LoginFormContainer'));
const InstructionsContainer = React.lazy(() => import('./InstructionsContainer'));
import HeaderContainer from "./HeaderContainer";
import PrivateRoute from "./PrivateRoute";

import {getYearsDataThunk} from "../actions/actionCreators";
export interface IRowData {
  disease: string | number,
  seriousReasons: string | number,
  notSeriousReasons: string | number,
  noVisit: string | number,
  other: string | number,
  total: string | number
}
export interface IYearData {
  firstSemester: {
    [key: string]: IRowData
  },
  secondSemester: {
    [key: string]: IRowData
  },
  year: {
    [key: string]: IRowData
  }
}
export interface IYearsData {
  [key: string]: IYearData
}

const App:React.FC = () => {

  const pathname = useLocation().pathname;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getYearsDataThunk);
  }, []);


  return (
    <>
      <HeaderContainer/>
      {
        pathname === '/class' &&
        <Suspense fallback={<span>Завантажую...</span>}>
          <InstructionsContainer />
        </Suspense>
      }

      <main className="main">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Suspense fallback={<span>Завантажую...</span>}>
                <Switch>
                  <Route exact path='/' component={AdminPage} />
                  <Route path='/login' component={LoginFormContainer} />
                  <PrivateRoute path='/class' component={SchoolClassPage} />
                </Switch>
              </Suspense>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
