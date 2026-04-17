# Условный оператор if

```python
weather = 'Хорошая'

if weather == 'Хорошая':
	print('run')
else:
	print('wait')
```

```python
weather = 'Хорошая'
time = 'День'

if weather == 'Хорошая':
	print('run')
	if time == 'День':
		print('run run')
```

```python
weather = 'Хорошая'

if weather == 'Хорошая':
	print('run')
elif weather == 'Нормальная':
	print('go')
else:
	print('wait')
```

```python
weather = 'Хорошая'
time = 'День'

if weather == 'Хорошая' and ( time == 'День' or time == 'Ночь' ):
	print('run')
```

```python
weather = 'Хорошая'

if not weather == 'Хорошая':
	print('run')
```
