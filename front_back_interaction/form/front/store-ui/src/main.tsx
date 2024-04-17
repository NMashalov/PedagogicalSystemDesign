import React from 'react'
import ReactDOM from 'react-dom/client'
import { EventPanel } from './comps/event_table.tsx'
import { EventSearch } from './comps/event_search.tsx'
import { Core } from './root/root.tsx'
import {EventProfile } from './pages/event_profile.tsx'
import { Routes } from './datastruct/pages.ts'
import { eventLoader } from './pages/loaders/event.ts'
import { strategyMdLoader, strategySettingsLoader } from './pages/loaders/strategy.ts'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Strategy from './pages/strategy/main.tsx'
import { AllSettings, Settings } from './pages/settings/settings.tsx'
import { AllDescriptions, StrategyPage } from './pages/strategy/description/description.tsx'
import { Home } from './pages/home/intro.tsx'
import { MapElement } from './comps/map/map.tsx'

const router = createBrowserRouter([
  {
    path: `/`,
    element: <Core />,
    children: [
      {
        element: <Home />,
        path:  `/${Routes.home}`,
      },
      {
        element: <EventSearch />,
        path:  `/${Routes.event}`,
        children: [
          {
            element: <EventProfile />,
            path: `/${Routes.event}/:app_id`,
            loader: eventLoader,
          },
        ]
      },
      {
        element: <AllDescriptions/>,
        path: `/${Routes.description}`,
      },
      {
        element: <Strategy />,
        path: `/${Routes.strategy}`,
      },
      {
        element: <StrategyPage />,
        path: `${Routes.description}/:stratName`,
        loader: strategyMdLoader,   
      },
      {
        element: <EventPanel />,
        path: `/${Routes.panel}`,
      },
      {
        element: <Settings />,
        path: `${Routes.settings}/:stratName`,
        loader: strategySettingsLoader
      },
      {
        element: <AllSettings />,
        path: `/${Routes.settings}`,
      },
      {
        element: <MapElement />,
        path: `/${Routes.map}`,
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,

)
