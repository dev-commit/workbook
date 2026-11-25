# SSH keys

## Информация

::: info

- https://www.gitignore.io/ - Generate GitIgnore
- https://www.youtube.com/playlist?list=PL3LQJkGQtzc5rDeb7FjACNb6sOW300yA0 - [playlist] GitHub

:::

**Два вида соединения**

- `git@github.com:Account/Repo.git` - соединение по SSH
- `https://github.com/Account/Repo.git` - соединение по HTTPS

## SSH

### 1. Git Bash

::: info

- https://git-scm.com/

:::

1. Install Git
2. Open Git Bash

```bash
cd путь_до_папки # Или ввести cd и перетащить папку
```

### 2. Generating a new SSH key

::: info

- https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent - Generating a new SSH key

:::

```bash
# 1. Generating a new SSH key
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

# 2. Adding your SSH key to the ssh-agent
eval $(ssh-agent -s)

# 3. Add your SSH private key to the ssh-agent
ssh-add ~/.ssh/id_rsa
```

### 3. Add the SSH key to your GitHub account

::: info

- https://help.github.com/en/articles/adding-a-new-ssh-key-to-your-github-account - Adding a new SSH key to your GitHub account

:::

1. Copy the SSH key to your clipboard

   ```bash
   clip < ~/.ssh/id_rsa.pub
   ```

2. https://github.com/ -> Settings -> SSH and GPG keys -> New SSH key
   - Ввести название ключа
   - Вставить ключ, скопированный в буфер обмена на 1 этапе
3. https://github.com/ -> Репозиторий -> Clone or download -> Use SSH -> Скопировать строку
4. Git Bash

   ```bash
   git clone git@github.com:name_account/name_repo.git
   ```

## HTTPS / HTTP

- При подключении по HTTPS / HTTP требуется единоразовый ввод логина и пароля от учетной записи
- После этого логин и пароль сохранятся на компьютере

**Смена логина и пароля**

- Если изменился логин/пароль, необходимо обновить данные учетной записи
- Панель управления -> Учетные записи пользователей -> Диспетчер учетных данных
- `git:https://github.com` - так выглядит учетка для Git
- Можно изменить данные учетки или ее удалить
- Если учетка была удалена, при следующем взаимодействии в консоли git попросит ввести логин и пароль в отдельном окне авторизации
