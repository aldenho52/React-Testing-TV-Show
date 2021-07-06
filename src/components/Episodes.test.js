import React from 'react'
import { render, screen } from '@testing-library/react'
import Episodes from './Episodes'

test('Episodes renders correctly', () => {
    render(<Episodes episodes={[]}/>)
})

const episodes = [
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
        ]

test('rerenders correctly when passing in new episode data', () => {
    const {rerender} = render(<Episodes episodes={[]}/>)
    let episodeObjects = screen.queryAllByTestId('1')
    expect(episodeObjects).toStrictEqual([])

    rerender(<Episodes episodes={episodes} />)

    episodeObjects = screen.queryAllByTestId('1')
    expect(episodeObjects).toHaveLength(2)
})