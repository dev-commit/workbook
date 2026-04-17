# Классы, ООП

- Переменные - поля
- Функции - методы
- self обязательный аргумент в методе, содержащий в себе экземпляр класса, передающийся при вызове метода

```python
# объявление класса
class Person:
	name = 'Tony'
	age = 25
	def set(self, name, age):
		self.name = name
		self.age = age

superPerson = Person()       # создание объекта (экземпляра класса)
print(superPerson.name)      # обращение к свойству объекта

superPerson.set('Steve', 27) # изменение свойства объекта (свойство класса не изменяется)
print(superPerson.name)      # обращение к свойству объекта
```

## Наследование

```python
# объявление нового класса, наследованого от Person
class Student(Person):
	course = 1

superStudent = Student()
superStudent.set('Jack', 19)
print(superStudent.name)
print(superStudent.course)
```

## Инкапсуляция

```python
# одно нижнее подчеркивание - рекомендация не использовать свойсво/метод
# при использовании ошибка выдаваться не будет
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
# два нижних подчеркивания - более жесткая рекомендация не использовать свойсво/метод
# при использовании ошибка выдаваться будет
class Person:
	__name = 'Tony'
	__age = 25
	def __set(self, name, age):
		self.__name = name
		self.__age = age

# обход ошибки, обращение по классу
superPerson = Person()
print(superPerson._Person__name)
superPerson._Person__set('Steve', 14)
```

## Полиморфизм

```python
# Полиморфизм - использование одного метода по разному в разных классах
print(2+2)     # для чисел сложение
print('2'+'2') # для строк конкатенация
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
