import React from 'react'
import UncoveredTopicItem from './UncoveredTopicItem'

function UncoveredTopicsList({ topics, toggleTopic, deleteTopic }) {
  return (
    <div>
      <ul className='list'>
        {topics.length === 0 && 'No New Topics'}
        {topics.map((toteach) => {
          return (
            <UncoveredTopicItem
              key={toteach.id}
              {...toteach}
              toggleTopic={toggleTopic}
              deleteTopic={deleteTopic}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default UncoveredTopicsList
