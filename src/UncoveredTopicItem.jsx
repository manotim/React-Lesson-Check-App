import React from 'react'

function UncoveredTopicItem({
  id,
  title,
  completed,
  toggleTopic,
  deleteTopic,
}) {
  return (
    <div>
      <li>
        <label>
          <input
            type='checkbox'
            checked={completed}
            onChange={(e) => toggleTopic(id, e.target.checked)}
          />
          {title}
        </label>
        <button className='btn btn-danger' onClick={() => deleteTopic(id)}>
          Remove
        </button>
      </li>
    </div>
  )
}

export default UncoveredTopicItem
