# fixture

::: info
https://docs.cypress.io/api/commands/fixture.html
:::

    загрузка фиксированного набора данных, расположенного в файле
    
путь к файлу из cypress/fixtures
кодировка, которая будет использована при чтении файла
опции для изменения стандартного поведения

## Загрузка данных из JSON

./cypress/fixtures/data.json

```js
{
    "name": "Tony",
    "age": 25
}
```./cypress/integration/test.spec.ts

```js
// Загрузка fixtures и добавление алиаса
cy.fixture('data.json').as('data');

// Загрузка fixtures и чтение данных
cy.fixture('data.json').then((data) => {
    cy.get('div').should('contain', data.name);

	// { name: "Tony", age: 25 }
    console.log(data);	
})
```

## Загрузка изображения

```js
// Returns dogs.png as Base64
cy.fixture('images/dogs.png')
```

```js
// Image fixtures are sent as base64
cy.fixture('images/logo.png').then((logo) => {
	// logo will be encoded as base64
	// and should look something like this:
	// aIJKnwxydrB10NVWqhlmmC+ZiWs7otHotSAAAOw==...
})
```

```js
// Change encoding of Image fixture
cy.fixture('images/logo.png', 'binary').then((logo) => {
	// logo will be encoded as binary
	// and should look something like this:
	// 000000000000000000000000000000000000000000...
})
```

## Загрузка MP3

```js
// Playing MP3 file
cy.fixture('audio/sound.mp3', 'base64').then((mp3) => {
	const uri = 'data:audio/mp3;base64,' + mp3
	const audio = new Audio(uri)

	audio.play()
})
```
