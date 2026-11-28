# Классы, ООП

## Информация

- _Переменные_ - поля
- _Функции_ - методы
- _self_ - обязательный аргумент в методе, содержащий в себе экземпляр класса, передающийся при вызове метода

```python
# Объявление класса
class Person:
    name = 'Tony'
    age = 25

    def set(self, name, age):
        self.name = name
        self.age = age


superPerson = Person()        # Создание объекта (экземпляра класса)
print(superPerson.name)       # Обращение к свойству объекта

superPerson.set('Steve', 27)  # Изменение свойства объекта (свойство класса не изменяется)
print(superPerson.name)       # Обращение к свойству объекта
```

## Наследование

```python
# Объявление нового класса, наследованного от Person
class Student(Person):
    course = 1


superStudent = Student()
superStudent.set('Jack', 19)
print(superStudent.name)
print(superStudent.course)
```

## Инкапсуляция

```python
# Одно нижнее подчеркивание - рекомендация не использовать свойство/метод.
# При использовании ошибка выдаваться не будет
class Person:
    _name = 'Tony'
    _age = 25

    def _set(self, name, age):
        self._name = name
        self._age = age


superPerson = Person()
print(superPerson._name)
superPerson._set('Steve', 14)
```

```python
# Два нижних подчеркивания - более жесткая рекомендация не использовать свойство/метод.
# При использовании ошибка выдаваться будет
class Person:
    __name = 'Tony'
    __age = 25

    def __set(self, name, age):
        self.__name = name
        self.__age = age


# Обход ошибки, обращение по классу
superPerson = Person()
print(superPerson._Person__name)
superPerson._Person__set('Steve', 14)
```

## Полиморфизм

```python
# Полиморфизм - использование одного метода по-разному в разных классах
print(2 + 2)      # Для чисел сложение
print('2' + '2')  # Для строк конкатенация
```

## Инициализация

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age


superPerson = Person('Tony', 25)
print(superPerson.name, superPerson.age)
```

```python
# age=None выставление значения по умолчанию
class Person:
    def __init__(self, name, age=None):
        self.name = name
        self.age = age


superPerson = Person('Tony')
print(superPerson.name, superPerson.age)
```
