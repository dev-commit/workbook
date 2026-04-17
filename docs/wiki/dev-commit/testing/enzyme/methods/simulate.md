# simulate

    Имитация событий на корневом узле в "wrapper". Должен быть один узел
    
Имя события для симуляции
Mock-объект события, который будет передан обработчикам событий

```js
import React, { Component } from 'react';
import { shallow } from 'enzyme';
```

```js
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
            name: 'Tony',
            job: ''
		};
    }
    handleClick = () => {
        this.setState({
            name: 'Jack'
        });
    }
    handleChange = ({ target: { value } }) => {
        this.setState({
            job: value
        });
    }
    render() {
		return (
			<div>
                <button onClick={this.handleClick}>Ok</button>
                <input onChange={this.handleChange} type="text"/>
			</div>
		);
	}
}
```

```js
it('', () => {
    const wrapper = shallow(<App />);expect(wrapper.state('name')).toBe('Tony');// 1. Начальное состояние name: 'Jack'.
    wrapper.find('button').simulate('click');// 2. Изменили состояние: name: 'Tony'.expect(wrapper.state('name')).toBe('Jack');// 3. Проверили корректность изменения состояния.
});
```

```js
it('', () => {
    const wrapper = shallow(<App />);expect(wrapper.state('job')).toBe('');                                        // 1. Начальное состояние job: ''.
    wrapper.find('input').simulate('change', { target: { value: 'Developer' } });// 2. Изменили состояние: job: 'Developer'.expect(wrapper.state('job')).toBe('Developer');                               // 3. Проверили корректность изменения состояния.
});
```
