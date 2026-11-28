# Объекты (словари)

## Варианты

**Общее**

```python
dic = {
    'name': 'Tony',
    'age': 25,
    'address': {
        'town': 'London',
        'home': '255'
    }
}

# Если элемент не найден, вернет ошибку
print(dic['name'])
print(dic['address']['town'])

# Если элемент не найден, вернет None, если не задан 2 аргумент
print(dic.get('name', 'Значение не найдено'))
```

```python
# Проверка существования ключа в словаре
if 'name1' in dic:
    print('exists')
else:
    print('not exists')
```

**Перебор значений словаря (value)**

```python
for value in dic.values():
    print(value)
```

**Перебор значений словаря (value) и номера текущей итерации (index)**

```python
for index, value in enumerate(dic.values()):
    print(index)
    print(value)
```
