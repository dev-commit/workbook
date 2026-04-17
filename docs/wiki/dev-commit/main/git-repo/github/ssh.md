# SSH keys

::: info

:::

### Два вида соединения

```bash
git@github.com:Account/Repo.git      # соединение по SSH
https://github.com/Account/Repo.git  # соединение по HTTPS
```

## SSH

### 1. Git Bash

::: info
https://git-scm.com/
:::
- 1. Install Git
- 2. Open Git Bash

### 2. Generating a new SSH key

::: info
https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
:::
- 1. Generating a new SSH key
- 2. Adding your SSH key to the ssh-agent
- 3. Add your SSH private key to the ssh-agent

### 3. Add the SSH key to your GitHub account

::: info
https://help.github.com/en/articles/adding-a-new-ssh-key-to-your-github-account
:::
- 1. Copy the SSH key to your clipboard
- 2. https://github.com/ -> Settings -> SSH and GPG keys -> New SSH key
- Ввести название ключа
- Вставить ключ скопированный в буфер обмена на 1 этапе
- 3. https://github.com/ -> Репозиторий -> Clone or download -> Use SSH -> Скопировать строку
- 4. Git Bash

## HTTPS / HTTP

- При подключении по HTTPS / HTTP требуется единоразовый ввода логина и пароля от учетной записи
- После этого логин и пароль сохранятся на компьютере
- Если изенился логин/пароль, необходимо обновить данные учетной записи
- Панель управления -> Учетные записи пользователей -> Диспетчер учетных данных
- git:https://github.com так выглядит учетка для Git
- Можно изменить данные учетки или ее удалить
- Если учетка была удалена, при следующем взаимодействии в консоле, git попросит ввести логин и пароль в отдельном окне авторизации
