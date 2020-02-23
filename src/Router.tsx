import React from 'react'

import { IonReactRouter } from '@ionic/react-router'
import { IonRouterOutlet } from '@ionic/react'
import { Redirect, Route } from 'react-router-dom'

import LaunchesPage from './pages/LaunchesPage'
import LaunchPage from './pages/LaunchPage'

const Router: React.FC = () => (
  <IonReactRouter>
    <IonRouterOutlet>
      <Route path="/launches" exact>
        <LaunchesPage />
      </Route>

      <Route path="/launches/:id" exact>
        <LaunchPage />
      </Route>

      <Route path="/" exact>
        <Redirect to="/launches" />
      </Route>
    </IonRouterOutlet>
  </IonReactRouter>
)

export default Router
