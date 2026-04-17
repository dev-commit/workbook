# Функции

```python
def sum(a, b):
	return a+b

# функция изначально должна быть определена
a = sum(5,10) # вызов функции
a = sum       # запись функции в переменную, которую можно вызвать a(5,10)
```

## Передача функции аргументов в другую функцию

```python
def greet(name):
	print('Hi' + name())

def get_name():
	return input('Input name ')

greet(get_name)
```
