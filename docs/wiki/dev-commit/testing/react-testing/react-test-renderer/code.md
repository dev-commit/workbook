# Примеры

### Создание Snapshot

```js
import React from 'react';
import renderer from 'react-test-renderer';

const App = () => (<Button label="click me" />);

const Button = ({ label }) => (
    <div data-testid="button" className="button-style">
    	{label}
    </div>
);

it('matches snapshot', () => {
    const tree = renderer.create(<Button lable="save"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
});
```
