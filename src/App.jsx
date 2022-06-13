import Header from './components/Header';
import './styles/App.scss';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <Header titelName= 'My Todos'/>
      <TodoList />
    </div>
  );
}

export default App;
