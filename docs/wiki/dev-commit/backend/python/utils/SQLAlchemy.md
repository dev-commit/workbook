# SQLAlchemy

## Информация

::: info

- http://wiki.python.su/Документации/SQLAlchemy
- https://ru.wikibooks.org/wiki/SQLAlchemy
- https://docs.sqlalchemy.org/en/latest/
- https://docs.sqlalchemy.org/en/latest/orm/tutorial.html
- https://docs.sqlalchemy.org/en/latest/dialects/mysql.html
- https://slides.com/kataev/sqlalchemy-pycon#/
- https://stackoverflow.com/questions/22252397/importerror-no-module-named-mysqldb

:::

```bash
pip install SQLAlchemy
pip install pymysql
pip install --upgrade SQLAlchemy
```

::: warning

- Примеры написаны в стиле SQLAlchemy 1.x. Импорт `declarative_base` из `sqlalchemy.ext.declarative` устарел с версии 1.4 (функция перенесена в `sqlalchemy.orm`), в 2.0 базовый класс модели наследуется от `DeclarativeBase`
- `session.query()` в SQLAlchemy 2.0 - устаревший (legacy) API. Запросы строятся через `select()`: `session.scalars(select(User).filter_by(name='Tony')).first()`

:::

## Тестирование

```python
import sqlalchemy
print(sqlalchemy.__version__)  # Посмотреть версию SQLAlchemy
```

## Работа с БД

### Connect

```python
from sqlalchemy import create_engine
engine = create_engine('mysql+pymysql://root:123@localhost/motmom')
# root      - user
# 123       - password
# localhost - host
# motmom    - db name
```

### Declarative creation of a table, class

```python
from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()


class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    name = Column(String(50))
    fullname = Column(String(50))
    password = Column(String(50))

    def __init__(self, name, fullname, password):
        self.name = name
        self.fullname = fullname
        self.password = password

    def __repr__(self):
        return "<User('%s','%s', '%s')>" % (self.name, self.fullname, self.password)


# users_table = User.__table__  # Доступ к таблице (объект Table)

# Create table
Base.metadata.create_all(engine)
```

### Session

```python
from sqlalchemy.orm import sessionmaker
Session = sessionmaker(bind=engine)
session = Session()

# Select query
for instance in session.query(User).order_by(User.id):
    print(instance.name, instance.fullname)

# Insert query
insertRecord = User('Tony', 'Tony Stark', 'TonyFirst')
session.add(insertRecord)
session.commit()

# Update query
updateRecord = session.query(User).filter_by(id=1).first()
updateRecord.name = 'New Name'
session.commit()

# Delete query
deleteRecord = session.query(User).filter_by(id=1).first()
session.delete(deleteRecord)
session.commit()
```

```python
session.close()
```

### Select Query

```python
query1 = session.query(User).filter_by(name='Tony').first()  # Выбрать 1 запись по совпадению поля name
query2 = session.query(User).filter(User.name == 'Tony')     # Выбрать записи по совпадению поля name
query3 = session.query(User).filter(User.name == 'Tony').filter(User.fullname == 'Stark')  # Выбрать записи по совпадению полей name и fullname
query4 = session.query(User).order_by(User.id)               # Выбрать все записи, все поля, сортировка по ID
query5 = session.query(User.name).order_by(User.id)          # Выбрать все записи, поле name, сортировка по ID
```
