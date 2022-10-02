import './App.css';

import Counter from './components/Counter';
import { useSelector } from 'react-redux';
import { Header } from './components/Header';
import { Form } from './components/Form';
import { authSlice } from './store/index';
import { authActions } from './store/index';

function App() {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    return (
        <div className="App">
            {!isLoggedIn && <Form></Form>}
            {isLoggedIn && <Header></Header>}
            {isLoggedIn && <Counter></Counter>}
        </div>
    );
}

export default App;
