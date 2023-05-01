import React from 'react'
import { useState } from 'react'

function NewTopicForm({ addTopic }) {
  const [newTopic, setNewTopic] = useState('')
  function handleSubmit(e) {
    e.preventDefault()

    if (newTopic === '') return

    addTopic(newTopic)
  }
  return (
    <div>
      <form className='new-item-form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='topic'>New Topic</label>
          <input
            type='text'
            id='topic'
            value={newTopic}
            onChange={(e) => setNewTopic(e.target.value)}
          />
        </div>
        <button className='btn'>Add Topic</button>
      </form>
    </div>
  )
}

export default NewTopicForm
