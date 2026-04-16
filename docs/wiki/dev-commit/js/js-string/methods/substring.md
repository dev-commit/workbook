# substring(), substr(), slice() - взятие подстроки

slice
- Отрицательные значения отсчитываются от конца строки

```js
const root = str.slice(1, 7);      // вырезать с 1 позиции до 7 позиции не включая
const root = 'testme'.slice(-2);     // 'me', от 2 позиции с конца
const root = 'testme'.slice(1, -1);  // "estm", от 1 позиции до первой с конца
```substring
- Отрицательные аргументы интерпретируются как равные нулю
- Слишком большие значения усекаются до длины строки
- Если start > end, то аргументы меняются местами, т.е. возвращается участок строки между start и end

```js
// вырезать с 1 позиции до 7 позиции не включая
const root = str.substring(1, 7);

// вырезать с 1 позиции до конца строки
const root = str.substring(1);

// 'testme', -2 становится 0
const root = 'testme'.substring(-2);

// 'test', -1 становится 0 -> получили substring(4, 0), 4 > 0,
// так что аргументы меняются местами -> substring(0, 4) = "test"
const root = 'testme'.substring(4, -1);
```substr

```js
const root = str.substr(1, 4);  // вырезать с 1 позиции 4 символа
const root = str.substr(1);     // вырезать с 1 позиции до конца строки
```
