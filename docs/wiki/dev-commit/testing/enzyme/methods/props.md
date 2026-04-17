# props

```js
import React, { Component } from 'react';
import { shallow } from 'enzyme';
```

```js
const Child = ({ propChild }) => (
    <div>{propChild}</div>
);

class App extends Component {
	constructor(props) {
		super(props);
    }
    render() {
		return (
            <div title="Root">
                <Child propChild="Child" />
                <a target="_blank"></a>
            </div>
		);
	}
}
```

```js
it('', () => {
    const props = { propApp: 'App' };
    const wrapper = shallow(<App {...props} />);expect(wrapper.instance().props.propApp)       .toBe('App');   // Для компонента <App /> (должен быть классовый комапонент).expect(wrapper.prop('title')).toBe('Root');  // Для корневого узла компонента <App /> (в данном случае <div title="Root">).expect(wrapper.find(Child).prop('propChild'))  .toBe('Child'); // Для React-компонента внутри <App />.expect(wrapper.find('a').prop('target'))       .toBe('_blank');// Для DOM-элемента внутри <App />.expect(wrapper.find(Child).text('propChild'))  .toBeTruthy();  // Проверка для React-компонента внутри <App />.
});
```

```js
// Аналогичные записиexpect(wrapper.find('a').props().target)  .toBe('_blank');expect(wrapper.find('a').prop('target'))  .toBe('_blank');
```

## Mock Function

```js
it('', () => {
    const props = {
        handleClick: jest.fn()
    }
});
```
