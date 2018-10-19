import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/Wizard';
import Step2 from './components/Step2/Step2';
// import Step3 from './components/Step3/Step3';

export default 
<Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path='/wizard' component={Wizard} />
    <Route path='/wizard/step2' component={Step2} />
    {/* <Route path='/wizard/step3' component={Step3} /> */}
</Switch>