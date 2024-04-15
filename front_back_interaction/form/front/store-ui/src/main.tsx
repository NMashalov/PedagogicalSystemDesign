import React from 'react'
import ReactDOM from 'react-dom/client'
import { EventPanel } from './comps/event_table.tsx'
import { EventSearch } from './comps/event_search.tsx'
import { Core } from './root/root.tsx'
import { eventLoader, EventProfile } from './pages/event_profile.tsx'
import { Routes } from './datastruct/pages.ts'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Strategy from './pages/strategy/main.tsx'
import { Settings } from './pages/settings.tsx'


const router = createBrowserRouter([
  {
    path: Routes.home,
    element: <Core />,
    children: [
      {
        element: <EventSearch />,
        path:  Routes.event,
        children: [
          {
            element: <EventProfile />,
            path: `${Routes.event}/:app_id`,
            loader: eventLoader,
          },
        ]
      },
      {
        element: <Strategy />,
        path: Routes.strategy,
        children: [
          // {
          //  element: <StrategyPage />,
          //  path: `${Routes.strategy}/:strat_name`,
          //  loader: stratLoader, 
          // }
        ]
      },
      {
        element: <EventPanel />,
        path: Routes.panel,
      },
      {
        element: <Settings />,
        path: Routes.settings,
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
