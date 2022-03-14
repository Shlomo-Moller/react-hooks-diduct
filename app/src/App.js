import { useState } from 'react'
import examples from './helpers/examples'
import './App.css'

const App = () => {

  const [exampleIndex, setExampleIndex] = useState(-1)

  const onSelect = e => setExampleIndex(e.target.value)

  return (
    <>
      <h1>React Hooks Diduct</h1>

      <select value={exampleIndex} onChange={onSelect}>
        <option value={-1} className='option-placeholder'>Select...</option>
        {examples.map((example, index) => (
          <option value={index} key={example.id}>
            {example.id}
          </option>
        ))}
      </select>
      
      <div className='example-wrapper'>
				{exampleIndex >= 0 ? examples[exampleIndex].element : ''}
			</div>
    </>
  )
}

export default App