# Модули

## Информация

1. Модули, которые написали сами
2. Модули внешние, загруженные с интернета
3. Модули, интегрированные в Python (stdlib - standard library)

- _PyPI_ - репозиторий Python
- _pip_ - программа, позволяющая устанавливать пакеты из PyPI

## Импорт

```python
import math                       # Импорт объекта модуля (нужно обращаться к объекту)
from math import sqrt             # Импорт отдельной функции модуля
from math import sqrt as my_sqrt  # Импорт отдельной функции модуля и ее переименование
from math import sqrt, pi         # Импорт нескольких методов/свойств
from math import *                # Получить все свойства и методы
```

## Random

```python
import random
from random import randint

print(random.randint(1, 100))  # От 1 до 100 (обращение к объекту)
print(randint(1, 100))         # От 1 до 100 (обращение к методу)
```

## Math

```python
from math import sqrt, pi

print(sqrt(25))  # Квадратный корень
print(pi)        # Число Пи
```
