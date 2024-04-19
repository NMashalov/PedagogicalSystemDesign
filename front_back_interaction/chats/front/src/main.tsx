import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Core } from './core/core';
import { Intro } from './pages/games/intro';
import Law from './pages/law.mdx';
import {theme} from './core/theme'
import { ColorModeScript, ChakraProvider} from '@chakra-ui/react';
import { StoryGame } from './pages/games/story';

import { Routes } from './structs/routes';
import { GameCore } from './pages/games/base';
import { CSSReset } from '@chakra-ui/react';
import { Home } from './pages/home';
import { GameTitles } from './structs/games';
import { Canvas } from '@react-three/fiber';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Core />,
    children: [
      {
        path: `/${Routes.home}`,
        element: <Home/>
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
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CSSReset/>
        <RouterProvider router={router} />
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    </ChakraProvider>
  </React.StrictMode>,
)
