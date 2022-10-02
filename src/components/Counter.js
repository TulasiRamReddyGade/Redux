import styled from 'styled-components';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from './../store/index';

const CounterDiv = styled.div`
    width: 90rem;
    height: 30rem;
    background-color: white;
    padding: 5rem;
    margin-top: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    & h1 {
        font-size: 5rem;
        color: violet;
        margin: 0;
        padding: 0;
    }
`;
const CounterValue = styled.h3`
    font-size: 2.5rem;
    color: tomato;
`;
const ButtonGroup = styled.div`
    display: flex;
`;
const Button = styled.button`
    background-color: #86198f;
    width: 20rem;
    padding: 1.2rem;
    color: white;
    font-size: 2rem;
    border-radius: 1rem;
    display: block;
    &:hover {
        cursor: pointer;
    }
    margin: 2rem;
`;

const InputNumber = styled.input`
    /* background-color: #7f1d1d; */
    width: 20rem;
    height: 5rem;
    margin: 2rem;
    font-size: 2rem;
    /* padding: 1.2rem; */
`;

const Counter = () => {
    // const [toggle, toggleCounter] = useState(false);
    const value = useSelector((state) => {
        // console.log(state.counter);
        return state.counter;
    });
    const showCounter = useSelector((state) => {
        // console.log(state);
        return state.showCounter;
    });
    const inputRef = useRef();
    const dispatch = useDispatch();
    const toogleHandler = () => {
        dispatch(counterActions.toggleCounter());
    };

    const IncrHandler = () => {
        dispatch(counterActions.increase(parseInt(inputRef.current.value)));
    };

    const DecrHandler = () => {
        dispatch(counterActions.decrease(parseInt(inputRef.current.value)));
    };

    // console.log(toggle);
    return (
        <CounterDiv>
            <h1>Counter</h1>
            <CounterValue>
                {!showCounter ? '---Counter Value--' : value}
            </CounterValue>
            {showCounter && (
                <ButtonGroup>
                    <InputNumber
                        type="number"
                        defaultValue={0}
                        ref={inputRef}
                    ></InputNumber>
                    <Button onClick={IncrHandler}>Increase</Button>
                    <Button onClick={DecrHandler}>Decrease</Button>
                </ButtonGroup>
            )}
            <Button value={'Toggle Counter'} onClick={toogleHandler}>
                Toggle Counter
            </Button>
        </CounterDiv>
    );
};

export default Counter;
