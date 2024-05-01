import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Core } from './core/core';
import { Intro } from './pages/games/intro';
import Law from './pages/law.mdx';

import { StoryGame } from './pages/games/story';
import { Routes } from './structs/routes';
import { GameCore } from './pages/games/base';
import { Home } from './pages/home';
import { GameTitles } from './structs/games';
//import { Canvas } from '@react-three/fiber';
import { DnDTest } from './pages/test/main';
import { IntroScene } from './anim/home/scene';
import { Landing } from './pages/landing';

import './anim/landing.css'
import { Cube } from './anim/box';
import { FlowerComp } from './anim/flower';
import { Caleido } from './pages/games/draw/examples/caleido';
import { PdfReader } from './pages/pdf/core';


const router = createBrowserRouter([
  {
    path: "/pdf",
    element: <PdfReader/>
  },
  {
    path: "/caleido",
    element: <Caleido/>,
  },
  {
    path: "/landing",
    element: <Landing />
  },
  {
    path: '/flower',
    element: <FlowerComp />
  },
  {
    path: "/intro",
    element:  <IntroScene />
  },
  {
    path: "/",
    element: <Core />,
    children: [
      {
        path: `/${Routes.home}`,
        element: <Home/>
      },
      {
        path:  '/test',
        element: <DnDTest/>
      },
      {
        path: `/${Routes.games}`,
        element: <GameCore/>,
        children: [
          {
            path: `/${Routes.games}/intro`,
            element: <Intro />
          },
          {
          path: `/${Routes.games}/${GameTitles.story}`,
          element: <StoryGame />
        }]
      },
      {
        path: `/${Routes.law}`,
        element: <Law />,
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
