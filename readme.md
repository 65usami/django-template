# django-template

## Feature

Djangoプロジェクト開発用のテンプレート

## Requirements

- Docker: 19.03.2
    - docker-compose: 3.7.3

## System

- Python: 3.6.7
- Nginx + uWSGI + Django + MySQL

## Usage

- 起動

```
$ docker-compose up -d

# 確認
# http://localhost/
```

- プロジェクト名(django-template)変更

docker-compose.ymlの `django-template` を別のプロジェクト名に変更する。

## Installation for Ubuntu 16.0.4 LTS
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

## Reference

__開発環境マニュアル設定情報(Docker無し) for Mac__


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

- 参考

https://uwsgi-docs.readthedocs.io/en/latest/WSGIquickstart.html
https://github.com/akiyoko/django-book-mysite-sample



## License

MIT

##  Author

Kenichi Usami

