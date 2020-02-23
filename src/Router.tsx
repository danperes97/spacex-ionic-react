import React from 'react'

import { IonReactRouter } from '@ionic/react-router'
import { IonRouterOutlet } from '@ionic/react'
import { Redirect, Route } from 'react-router-dom'

import Missions from './pages/Missions'
import Mission from './pages/Mission'

const Router: React.FC = () => (
  <IonReactRouter>
    <IonRouterOutlet>
      <Route path="/missions" exact>
        <Missions />
      </Route>

      <Route path="/missions/:id" exact>
        <Mission />
      </Route>

      <Route path="/" exact>
        <Redirect to="/missions" />
      </Route>
    </IonRouterOutlet>
  </IonReactRouter>
)

export default Router
