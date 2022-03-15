import ThemeToggler from '../components/theme-context/ThemeToggler'
import ThemeWithTogglerToggler from '../components/theme-and-toggler-context/ThemeWithTogglerToggler'
import Counter from '../components/usereducer/Counter'
import CounterWithInit from '../components/usereducerwithinit/CounterWithInit'
import CounterLazyInit from '../components/usereducerlazyinit/CounterLazyInit'
import TodosApp from '../components/context-and-reducer/TodosApp'

const examples = [
	{ id: 'ThemeToggler'           , element: <ThemeToggler />                      },
	{ id: 'ThemeWithTogglerToggler', element: <ThemeWithTogglerToggler />           },
	{ id: 'Counter'                , element: <Counter />                           },
	{ id: 'CounterWithInit'        , element: <CounterWithInit initialCount={10} /> },
	{ id: 'CounterLazyInit'        , element: <CounterLazyInit initialCount={-5} /> },
	{ id: 'TodosApp'               , element: <TodosApp />                          },
]

export default examples