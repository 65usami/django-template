

pip install Django

python -m django --version
2.2.5

django-admin startproject config


python manage.py migrate
python manage.py makemigrations app


デプロイ方法

https://stackoverflow.com/questions/17803829/how-to-customize-a-requirements-txt-for-multiple-environments


テスト

python manage.py test

uWSGI

uwsgi uwsgi.ini
#uwsgi uwsgi.ini --logger file:/tmp/uwsgi.log
#uwsgi uwsgi.ini --logger file:/tmp/uwsgi.log --pidfile /tmp/uwsgi.pid
#uwsgi uwsgi.ini --stats 127.0.0.1:9191

https://uwsgi-docs.readthedocs.io/en/latest/WSGIquickstart.html

アイディア

django redis


Reference

https://github.com/akiyoko/django-book-mysite-sample


