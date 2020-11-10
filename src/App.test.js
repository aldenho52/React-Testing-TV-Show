import React from 'react'
import App from './App'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import {userEvent} from '@testing-library/user-event'
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

test('renders without errors, content loaded, and dropdown working', async () => {
    mockFetchShow.mockResolvedValueOnce(data)
    render(<App />)
    
    // default home page rendering correctly
    const name = screen.queryByText(/show 1/i)
    const summary = screen.queryByText(/summary 1/i)


    // dropdown menu working
    await waitFor(() => {
        const dropdown = screen.queryByText(/select a season/i)
        fireEvent.mouseDown(dropdown)
        const season1 = screen.queryByText(/season 1/i)
        fireEvent.click(season1)
        const episodes = screen.getAllByText(/season 1/i)
        expect(episodes).toHaveLength(2)
    })  
})

