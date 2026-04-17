# state

```js
import React, { Component } from 'react';
import { shallow } from 'enzyme';
```

```js
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'Tony'
		};
    }
    render() {
		return (
			<div>
                <h1>Hello</h1>
			</div>
		);
	}
}
```

```js
it('', () => {
    const wrapper = shallow(<App />);// Аналогично.expect(wrapper.state('name')) .toBe('Tony');expect(wrapper.state().name)  .toBe('Tony');
});
```
