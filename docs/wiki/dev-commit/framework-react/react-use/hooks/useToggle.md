# useToggle

```js
import { useToggle } from 'react-use';

const App = () => {
    const [isOpened, toggle] = useToggle(false);

    return (
        <Modal
            isOpen={isOpened}
            onClick={toggle}
        >
            Hello
        </Modal>
    )
}
```
