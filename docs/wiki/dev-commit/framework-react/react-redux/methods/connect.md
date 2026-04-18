# Connect

    Подключение компонента к Store (декоратор)
    

		"маппинг" (соответствие) state к props. Подписаться на обновления данных
	    
- Не только получаем в this.props.XXX данные, но еще подписываемся на изменение этих данных
- Когда мы подписываемся только на нужные редьюсеры в компоненте, перерисовка происходит только в случае изменения конкретно этих данных. Если же мы бы подписались просто на весь корневой редьюсер, то не важно в каком бы редьюсере изменились данные - все подписанные на корневой редьюсер компоненты обновились бы

"маппинг" (соответствие) dispatch к props. "Прокинуть" actions в контейнер
Результат работы функции connect - новый присоединенный компонент, который оборачивает переданный компонент. Компонент &lt;App /&gt; на выходе получился &lt;Connected(App)>. В свойствах (props) компонента &lt;App /&gt; теперь есть метод redux store - dispatch, и объект свойств

- mapStateToProps срабатывает каждый раз, когда происходит изменение state

```js
import { connect } from 'react-redux';

const mapStateToProps = state => ({
	myValue: state.myReducer
})
const mapDispatchToProps = {
	getMethod: getMethod
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Component);
```

## mapDispatchToProps

#### Объект

```js
const mapDispatchToProps = {
	getPhotosAction: return
}
```

#### Функция

```js
const mapDispatchToProps = function(dispatch) {
	return {
		getPhotosAction: function(year) {
			returndispatch(getPhotos(year));
		}
	}
}
```

## Варианты

```js
export default connect(
	null,              // subscribe = false
	null               // action = false
)(Component);
```

```js
export default connect(
	mapStateToProps,   // subscribe = true
	null               // action = false
)(Component)
```

---

```js
export default connect(
	null,              // subscribe = false
	mapDispatchToProps // action = true
)(Component)
```

```js
export default connect(
	mapStateToProps,   // subscribe = true
	mapDispatchToProps // action = true
)(Component)
```
