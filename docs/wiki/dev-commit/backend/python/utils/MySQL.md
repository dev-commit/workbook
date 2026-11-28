# Python и MySQL

## Информация

::: info

- https://www.w3schools.com/python/python_mysql_getstarted.asp

:::

```bash
pip install mysql-connector
```

::: warning

- Пакет `mysql-connector` устарел (последняя версия - 2019 год). Официальный пакет - `mysql-connector-python` (`pip install mysql-connector-python`), импорт тот же: `import mysql.connector`

:::

## Пример кода

::: details encoding_content.py

```python
# Кодировка utf-8
import sys
sys.stdout.reconfigure(encoding='utf-8')

# Вывод html
print("Content-Type: text/html\n")
```

:::

::: details db_connect.py

```python
import mysql.connector
mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="",
    database="motmom"
)
```

:::

::: details db_select.py

```python
#!C:/Users/User/AppData/Local/Programs/Python/Python37-32/python.exe
import encoding_content
import db_connect

mycursor = db_connect.mydb.cursor()
mycursor.execute("SELECT * FROM event")
myresult = mycursor.fetchall()

arr = []
for x in myresult:
    arr.append([x[0], x[1], str(x[2])])
print(arr)
```

:::

::: details db_insert.py

```python
#!C:/Users/User/AppData/Local/Programs/Python/Python37-32/python.exe
import encoding_content
import db_connect

mycursor = db_connect.mydb.cursor()
sql = "INSERT INTO event (NAME, TIME) VALUES (%s, %s)"
val = ("TestName", "12:12:12")
mycursor.execute(sql, val)
db_connect.mydb.commit()
print(mycursor.rowcount, "record inserted.")
```

:::

::: details db_update.py

```python
#!C:/Users/User/AppData/Local/Programs/Python/Python37-32/python.exe
import encoding_content
import db_connect

mycursor = db_connect.mydb.cursor()
sql = "UPDATE event SET NAME='UpdateName', TIME='01.01.01' WHERE ID=7"
mycursor.execute(sql)
db_connect.mydb.commit()
print(mycursor.rowcount, "record(s) affected")
```

:::

::: details db_delete.py

```python
#!C:/Users/User/AppData/Local/Programs/Python/Python37-32/python.exe
import encoding_content
import db_connect

mycursor = db_connect.mydb.cursor()
sql = "DELETE FROM event WHERE ID=7"
mycursor.execute(sql)
db_connect.mydb.commit()
print(mycursor.rowcount, "record(s) deleted")
```

:::

::: details JavaScript Code (SELECT)

```js
$.get("python/db_select.py", {}, function (data) {
  const arr = eval(data);
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    const id = arr[i][0];
    const name = arr[i][1];
    const time = arr[i][2];
    result += `<div>${id} ${name} ${time}</div>`;
  }
  $("body").append(result);
});
```

:::
