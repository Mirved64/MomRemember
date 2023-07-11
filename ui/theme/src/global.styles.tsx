import { Global } from '@emotion/react'
import { css }    from '@emotion/react'

import React      from 'react'

const GlobalStyles = () => (
  <Global
    styles={css`
    @font-face {
      font-family: "Geometria";
      src: url("/font/geometria_light.otf")
    }
    @font-face {
      font-family: "BubbleboddyNeueTrial";
      src: url("/font/bubbleboddyneue-regular_trial.otf")
    }
      html,
      body,
      #__next {
        margin: 0;
        height: 100%;
        font: Geometria;
      }
    `}
  />
)

export { GlobalStyles }
