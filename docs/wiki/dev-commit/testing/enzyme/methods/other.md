# Основные действия

```js
import React from 'react';
import { shallow } from 'enzyme';
```

```js
const App = ({ propApp }) => (
    <div>
        <h1 className="header">Hello</h1>
    </div>
)
```

```js
it('', () => {
    const wrapper = shallow(<App />);expect(!!wrapper)                                            .toBeTruthy();expect(wrapper.find('h1').first().text()).toBe('Hello');expect(wrapper.find('h1').last().text()).toBe('Hello');expect(wrapper.find('h1').at(0).text()).toBe('Hello');expect(wrapper.find('h1').text())                           .toBe('Hello');expect(wrapper.find('h1').text())                           .toContain('ello');expect(wrapper.find('h1').html())                           .toBe('<h1 class="header">Hello</h1>');expect(wrapper.contains(<h1 className="header">Hello</h1>)).toBeTruthy();expect(wrapper.find('h1').length)                           .toBe(1);expect(wrapper.find('h2').length)                           .toBe(0);expect(wrapper.find('h1').exists())                         .toBeTruthy();expect(wrapper.find('h1').hasClass('header'))               .toBeTruthy();expect(wrapper.find('h1').hasClass('nothing'))              .toBeFalsy();
});
```

```js
// expect(Component.displayName).toBe('TestComponent')
```

```js
expect(wrapper.find('h1').length).toBe(1);  // есть элемент
expect(wrapper.find('h2').length).toBe(0);  // нет элемента
```
