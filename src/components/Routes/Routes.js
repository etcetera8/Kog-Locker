import React from 'react';
import { Route, Switch } from 'react-router-dom';
import StatsCard from '../StatsCard/StatsCard'

const Routes = () => {
  return (
    <Switch>
      <Route 
        path='stats'
        component={StatsCard} 
      />
    </Switch>
  )
}

export default Routes;