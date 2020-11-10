import React from 'react'
import { render, screen } from '@testing-library/react'
import Episodes from './Episodes'

test('Episodes renders correctly', () => {
    render(<Episodes episodes={[]}/>)
})

const missions = [
    { mission_name: 'Mission 1', mission_id: 1},
    { mission_name: 'Mission 2', mission_id: 2}
]

test('rerenders correctly when passing in new mission data', () => {
    // const {rerender} = render(<MissionsList missions={[]} />)
    // let missionObjects = screen.queryAllByTestId('mission')
    // expect(missionObjects).toStrictEqual([])

    // rerender(<MissionsList missions={missions} />)

    // missionObjects = screen.queryAllByTestId('mission')
    // expect(missionObjects).toHaveLength(2)
})