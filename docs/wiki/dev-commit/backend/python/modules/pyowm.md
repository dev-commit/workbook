# Модуль определения погоды (pyowm)

## Пример

```python
import pyowm

owm = pyowm.OWM('API_KEY')
observation = owm.weather_at_place('London')
w = observation.get_weather()

temperature = w.get_temperature('celsius')['temp']
status = w.get_detailed_status()

print(temperature, status)
```

::: warning

- Пример написан для pyowm 2.x. В pyowm 3 погода запрашивается через менеджер: `owm.weather_manager().weather_at_place('London')`
- Вместо `get_weather()`, `get_temperature()` и `get_detailed_status()` в pyowm 3 - свойство `observation.weather`, метод `w.temperature('celsius')` и свойство `w.detailed_status`

:::
