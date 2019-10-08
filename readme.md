# django-template

## Feature

Djangoプロジェクト開発用のテンプレート

## Requirements

- Docker: 19.03.2
    - docker-compose: 1.24.1

## System

- Python: 3.7.4
- Nginx
- uWSGI
- Django: 2.2.5
- Redis: 3.3.8
- MySQL: 8.0.17

## Usage

- 起動

```
$ export REQUIREMENT_TXT=development.txt
$ docker-compose up -d

# 確認
# http://localhost/
```
> REQUIREMENT_TXT: development.txt, staging.txt, production.txt, text.txt

- マイグレーション

```
$ docker-compose run web ./manage.py migrate
$ docker-compose run web ./manage.py makemigrations app
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

## Docker Installation for Ubuntu

[Docker Installation for Ubuntu](https://github.com/65usami/django-template/wiki/Docker-Installation-for-Ubuntu)

## Set-up Development env

[開発環境構築(Docker無し) for Mac](https://github.com/65usami/django-template/wiki/%E9%96%8B%E7%99%BA%E7%92%B0%E5%A2%83%E6%A7%8B%E7%AF%89(Docker%E7%84%A1%E3%81%97)-for-Mac)


## Reference

[References](https://github.com/65usami/django-template/wiki/References)

## License

MIT

##  Author

Kenichi Usami
