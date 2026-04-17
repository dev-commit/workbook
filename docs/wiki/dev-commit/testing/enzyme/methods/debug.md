# debug

```js
import React from 'react';
import { shallow } from 'enzyme';
```

```js
const App = () => (
    <div>
        <h1 className="header">Hello</h1>
    </div>
)
```

```js
it('', () => {
    const wrapper = shallow(<App />);

    console.log(wrapper.debug());
});
```

```js
// => 
// <div>
//     <h1 className="header">
//         Hello
//     </h1>
// </div>
```
