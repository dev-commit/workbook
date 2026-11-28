# CMD

## Менеджеры пакетов

::: tip Определение

- **pip** - используется для Python 2 (в окружении Python 3 - для Python 3)
- **pip3** - используется для Python 3

:::

::: warning

- Поддержка Python 2 прекращена в 2020 году. В виртуальном окружении Python 3 команды `pip` и `pip3` равнозначны, а пакет для конкретного интерпретатора устанавливают через `python3 -m pip install …`
- В macOS и Linux Python 3 обычно запускается командой `python3`

:::

## Общее

```bash
# Проверка версии Python
python --version
# Запустить программу test.py (CMD открыт из директории программы)
python test.py
```

## Работа с пакетами

```bash
pip install numpy         # Установить пакет из PyPI
pip install numpy==1.19.5 # Установить конкретную версию пакета
pip uninstall numpy       # Удалить пакет
```
