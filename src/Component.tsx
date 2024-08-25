import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const Component = () => {
    const count = useSelector((state: RootState) => state.counter.value)
    return (
        <>
            <p>I am a counter from Component</p>
            <button>{count}</button>
        </>
    )
}

export default Component
