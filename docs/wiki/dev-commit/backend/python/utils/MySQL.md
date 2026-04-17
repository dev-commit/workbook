# Python и MySQL

## Basic

::: info
https://www.w3schools.com/python/python_mysql_getstarted.asp
:::

```bash
pip install mysql-connector
```

## encoding_content.py

```python
# кодировка utf-8
import sys
sys.stdout.reconfigure(encoding='utf-8')

# вывод html
print("Content-Type: text/html\n")
```

## db_сonnect.py

```python
import mysql.connector
mydb = mysql.connector.connect(
	host="localhost",
	user="root",
	passwd="",
	database="motmom"
)
```

## db_select.py

```python
#!C:/Users/Sawyer/AppData/Local/Programs/Python/Python37-32/python.exe
import encoding_content
import db_сonnect

mycursor = db_сonnect.mydb.cursor()
mycursor.execute("SELECT * FROM event")
myresult = mycursor.fetchall()

arr = []
for x in myresult:
	arr.append([x[0], x[1], str(x[2])])
print(arr)
```

## db_insert.py

```python
#!C:/Users/Sawyer/AppData/Local/Programs/Python/Python37-32/python.exe
import encoding_content
import db_сonnect

mycursor = db_сonnect.mydb.cursor()
sql = "INSERT INTO event (NAME, TIME) VALUES (%s, %s)"
val = ("TestName", "12:12:12")
mycursor.execute(sql, val)
db_сonnect.mydb.commit()
print(mycursor.rowcount, "record inserted.")
```

## db_update.py

```python
#!C:/Users/Sawyer/AppData/Local/Programs/Python/Python37-32/python.exe
import encoding_content
import db_сonnect

mycursor = db_сonnect.mydb.cursor()
sql = "UPDATE event SET NAME='UpdateName', TIME='01.01.01' WHERE ID=7"
mycursor.execute(sql)
db_сonnect.mydb.commit()
print(mycursor.rowcount, "record(s) affected")
```

## db_delete.py

```python
#!C:/Users/Sawyer/AppData/Local/Programs/Python/Python37-32/python.exe
import encoding_content
import db_сonnect

mycursor = db_сonnect.mydb.cursor()
sql = "DELETE FROM event WHERE ID=7"
mycursor.execute(sql)
db_сonnect.mydb.commit()
print(mycursor.rowcount, "record(s) deleted")
```

```js
// JavaScript Code (SELECT)
$.get('python/db_select.py', {}, function(data) {
	const arr = eval(data);
	let result = '';
	for(let i=0; i<arr.length; i++) {
		const id   = arr[i][0];
		const name = arr[i][1];
		const time = arr[i][2];
		result += `<div>${id} ${name} ${time}</div>`;
	}
	$('body').append(result);
})
```
