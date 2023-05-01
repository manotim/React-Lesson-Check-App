import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import NewTopicForm from './NewTopicForm'
import UncoveredTopicsList from './UncoveredTopicsList'

function App() {
  const [topics, setTopics] = useState(() => {
    const localValue = localStorage.getItem('NEWTOPICS')

    if (localValue === null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem('NEWTOPICS', JSON.stringify(topics))
  }, [topics])

  function addTopic(title) {
    setTopics((currentTopics) => {
      return [
        ...currentTopics,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  console.log(topics)

  function toggleTopic(id, completed) {
    setTopics((currentTopics) => {
      return currentTopics.map((topic) => {
        if (topic.id === id) {
          return { ...topic, completed }
        }
        return topic
      })
    })
  }

  function deleteTopic(id) {
    setTopics((currentTopics) => {
      return currentTopics.filter((topic) => topic.id !== id)
    })
  }

  return (
    <>
      <NewTopicForm addTopic={addTopic} />
      <h1>Uncovered Topics</h1>
      <UncoveredTopicsList
        topics={topics}
        toggleTopic={toggleTopic}
        deleteTopic={deleteTopic}
      />
    </>
  )
}
export default App
