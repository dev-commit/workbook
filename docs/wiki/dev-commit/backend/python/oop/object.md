# Объекты (словари)

```python
dic = {
	'name': 'Tony',
	'age': 25,
	'address': {
		'town':'London',
		'home':'255'
	}
}

# если элемент не найден, вернет ошибку
print(dic['name'])
print(dic['address']['town'])

# если элемент не найден, вернет None, если не задан 2 аргумент
print(dic.get('name', 'Значение не найдено'))
```

```python
# проверка существования ключа в словаре
if ('name1') in dic:
	print('exists')
else:
	print('not exists')
```

## Перебор значений словаря (value)

```python
for value in dic:
	print(value)
```

## Перебор значений словаря (value) и номера текущей итерации (index)

```python
for index, value in enumerate(dic):
	print(index)
	print(value)
```
