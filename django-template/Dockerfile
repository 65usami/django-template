FROM python:3.7.4
ENV PYTHONIOENCODING utf-8
ENV PYTHONBUFFER 1
RUN apt update
RUN apt install -y build-essential gcc clang
RUN mkdir /django-app
RUN mkdir /django-app/requirements
WORKDIR /django-app
ARG REQUIREMENT_TXT
COPY requirements/base.txt /django-app/requirements/base.txt
COPY requirements/${REQUIREMENT_TXT} /django-app/requirements/${REQUIREMENT_TXT}
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements/${REQUIREMENT_TXT}
COPY . /django-app/
