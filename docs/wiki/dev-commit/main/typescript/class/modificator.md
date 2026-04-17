# Модификаторы полей

## Виды модификаторов

- protected - внутри класса и в наследниках
- public - внутри класса и для всех инстансов (задан по умолчанию)
- private - внутри класса

```js
class Animal {
	protected voice: string = ''
	public color: string = 'black'

	constructor() {
		this.go()
	}

	private go() {
		console.log('Go')
	}
}

class Cat extends Animal {
	public setVoice(voice: string): void {
		this.voice = voice
	}
}

const cat = new Cat()
cat.setVoice('test')
console.log(cat.color)
// cat.voice
```
