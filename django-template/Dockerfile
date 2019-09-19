FROM ubuntu:16.04
FROM python:3.6.7
ENV PYTHONIOENCODING utf-8
ENV PYTHONBUFFER 1
RUN apt update
RUN apt install -y build-essential gcc clang
RUN mkdir /django-app
RUN mkdir /django-app/requirements
WORKDIR /django-app
COPY requirements/base.txt /django-app/requirements/base.txt
COPY requirements/production.txt /django-app/requirements/production.txt
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements/production.txt
COPY . /django-app/
RUN python manage.py migrate
RUN python manage.py makemigrations app
