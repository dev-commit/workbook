# SSH keys

::: info
https://confluence.atlassian.com/bitbucketserver0610/creating-ssh-keys-989761219.html
:::

### 1. Создание нового ключа SSH

- Запустить командную строку под админом

Команда на создание ключа

```bash
ssh-keygen -t rsa -C "your_email@example.com"
```

Ответ консоли

```bash
Generating public/private rsa key pair.
Enter file in which to save the key (C:\Users\user/.ssh/id_rsa):
```

После нажатия enter, будет запрос на ввод и подтверждение кодовой фразы

```bash
Created directory 'C:\Users\user/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```

Информация после ввода пароля

```bash
Your identification has been saved in C:\Users\user/.ssh/id_rsa.
Your public key has been saved in C:\Users\user/.ssh/id_rsa.pub.
The key fingerprint is: SHA256:ЗдесьБудетКлюч ЗдесьБудетEmail
```

### 2. Установка ключа в аккаунт Bitbucket

- Перейти в аккаунт на Bitbucket в раздел SSH keys
- https://bitbucket.region.vtb.ru/plugins/servlet/ssh/account/keys
- Выбрать Add key и указать public key из C:\Users\user/.ssh/id_rsa.pub.

### 3. Клонирование репозитория чеерез SSH

- У репозитория выбрать clone -> SSH

Командная строка

```bash
git clone СкопированныйАдрес
```

Вывод консоли

```bash
The authenticity of host `НазваниеХоста` can't be established.
RSA key fingerprint is `ДанныеПоКлючу`
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
```

Ввод passphrase, указанного при регистрации ключа

```bash
Enter passphrase for key '/c/Users/user/.ssh/id_rsa':
```

Клонирование репозитория

```bash
remote: Enumerating objects: 7715, done.
remote: Counting objects: 100% (7715/7715), done.
remote: Compressing objects: 100% (3142/3142), done.
remote: Total 7715 (delta 4636), reused 7018 (delta 4132)
Receiving objects: 100% (7715/7715), 2.45 MiB | 2.10 MiB/s, done.
Resolving deltas: 100% (4636/4636), done.
```

### 4. Прочее

Проверка существующих ключей SSH

```bash
cd %userprofile%/.ssh
```

Создание резервной копию старых ключей SSH

```bash
mkdir key_backup
copy id_rsa* key_backup
```
