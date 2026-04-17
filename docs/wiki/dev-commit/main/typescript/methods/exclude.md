# Exclude

```js
type User = {
	_id: number
	name: string
	email: string
	createdAt: Date
}

// Создать новый тип из существующего, не включая некоторые поля

// Указываем, какие поля нужно не забирать (_id и createdAt)
type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> // 'name' | 'email'
// Указываем, какие поля нужно забрать (name, email)
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // 'name' | 'email'

let u1: UserKeysNoMeta1 = 'name'
// u1 = '_id'
```
