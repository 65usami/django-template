# django-template

## Feature

Djangoプロジェクト開発用のテンプレート

## Requirements

- Docker: 19.03.2
    - docker-compose: 3.7.3

## System

- Python: 3.6.7
- Nginx
- uWSGI
- Django: 2.2.5
- Redis: 3.3.8
- MySQL: 8.0.17

## Usage

- 起動

```
$ docker-compose up -d

# 確認
# http://localhost/
```

- マイグレーション

```
$ docker-compose run uwsgi ./manage.py migrate
$ docker-compose run uwsgi ./manage.py makemigrations app
```

## Apply your project

**1. プロジェクト名(django-template)変更**

docker-compose.ymlの `django-template` を別のプロジェクト名に変更する。

トップディレクトリ(django-template)を同様のプロジェクト名に変更する。

**2. ALLOWED_HOSTS**

デフォルトは`settings.py`に`ALLOWED_HOSTS = ['*']`としている。適切な設定(指定IPアドレス等)を適用。

**3. MySQL**

デフォルトのDB名、ユーザー名等、全て`django`となっている。
下記を適切な設定に変更する。

    - docker-compose.yml
    - django-template/config/settings.py
    - mysql/sql/init.sql

## Docker Installation for Ubuntu 16.0.4 LTS
```
# Docker installation
$ sudo apt-get update
$ sudo apt-get install -y git apt-transport-https ca-certificates curl software-properties-common
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

$ sudo apt-get update
$ sudo apt-get install -y docker-ce

# Add user to docker group
$ sudo usermod -aG docker ubuntu

# Once exit
$ exit

# docker-compose installation
$ sudo curl -L https://github.com/docker/compose/releases/download/1.24.1/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
$ sudo chmod +x /usr/local/bin/docker-compose
$ exit
```

## Set-up Development env

__開発環境設定(Docker無し) for Mac__


- インストール
```
$ cd django-template
$ pip install --upgrade pip
$ pip install --no-cache-dir -r requirements/development.txt
$ python manage.py migrate
$ python manage.py makemigrations app
```

- 起動
```
$ uwsgi uwsgi.ini --http :3033 --stats 127.0.0.1:9191

# 確認
# http://localhost:3033/
```

- テストコード実行
```
$ python manage.py test
```

## Reference

https://github.com/akiyoko/django-book-mysite-sample

https://uwsgi-docs.readthedocs.io/en/latest/WSGIquickstart.html

https://qiita.com/kenkono/items/6221ad12670d1ae8b1dd

## License

MIT

##  Author

Kenichi Usami
