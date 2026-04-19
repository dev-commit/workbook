# SQL-запросы

## Записи в таблице

```sql
/* Выбор 1 записи */
SELECT * FROM products WHERE ID=2
/* Выбор всех записей */
SELECT * FROM products ORDER BY ID
/* Выборка по неполному названию, регистр не учитывается */
SELECT * FROM products WHERE NAME LIKE '%название%'
/* Получение последнего id */
SELECT MAX(ID) AS ID FROM products
/* Добавление новой записи */
INSERT INTO products(NAME, DESCRIPTION) VALUES ('Имя', 'Описание')
/* Редактирование записи */
UPDATE products SET NAME='Имя', DESCRIPTION='Описание' WHERE ID=2
/* Удаление записи */
DELETE FROM products WHERE ID=2
```

```sql
ORDER BY id DESC /* Сортировка в обратном порядке */
ORDER BY id ASC  /* Сортировка в алфавитном порядке */
ORDER BY RAND()  /* Рандомный порядок */
LIMIT 10         /* Последние 10 записей */
LIMIT 5, 10      /* С 6 по 15 записи (5 начальное значение, 10 кол-во элементов) */
```

<img src="../@img/query.jpg" width="550px"/>

## Примеры

::: details Выборка товара с максимальной ценой

```sql
SELECT *
FROM products
WHERE PRICE=(SELECT MAX(PRICE) AS PRICE FROM products)
```

:::

::: details Диапазон in

```sql
SELECT *
FROM products
WHERE NAME in ("Name1", "Name2")
```

:::

## Таблицы в БД

```sql
DROP TABLE users           /* Удаление таблицы */
RENAME TABLE DOORS TO DOOR /* Изменение имени таблицы */
```
