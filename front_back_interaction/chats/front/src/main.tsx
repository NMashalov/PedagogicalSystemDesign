import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Core } from './core/core';
import { Intro } from './pages/games/intro';
import { Law } from './pages/law';
import {theme} from './core/theme'
import { ColorModeScript, ChakraProvider} from '@chakra-ui/react';
import { StoryGame } from './pages/games/story';

import { Routes } from './structs/base';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Core />,
    children: [
      {
        path: "/games/home",
        element: <Intro />,
      },
      {
        path: "/law",
        element: <Law />,
      },
      {
        path: `"/game/note",
        element: <StoryGame />
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    </ChakraProvider>
  </React.StrictMode>,
)
