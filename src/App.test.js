import React from 'react'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import App from './App'

import { fetchShow as mockFetchShow } from './api/fetchShow'
jest.mock('./api/fetchShow')

const data = {
    data: {
      name: "Show 1",
      summary: "Summary 1",
      image: { original: "original_image", medium: "medium_image", },
      _embedded: {
        episodes: [
          {
            id: 1,
            url: "url1",
            name: "Episode 1",
            season: 1,
            number: 1,
            summary: "Ep_Summary_1",
            runtime: 1,
            image: { medium: "ep1_med_image", }
          },
          {
            id: 2,
            url: "url2",
            name: "Episode 2",
            season: 1,
            number: 2,
            summary: "Ep_Summary_2",
            runtime: 2,
            image: { medium: "ep2_med_image", }
          }
        ],
      }
    },
  }

test('renders without errors', () => {
    mockFetchShow.mockResolvedValueOnce(data)
    render(<App />) 
})