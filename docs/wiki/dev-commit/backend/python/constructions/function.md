# Функции

## Варианты

**Общее**

```python
def sum(a, b):
    return a + b


# Функция изначально должна быть определена
a = sum(5, 10)  # Вызов функции
a = sum         # Запись функции в переменную, которую можно вызвать a(5, 10)
```

**Передача функции аргументом в другую функцию**

```python
def greet(name):
    print('Hi ' + name())


def get_name():
    return input('Input name ')


greet(get_name)
```
