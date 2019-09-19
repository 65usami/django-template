from django.urls import path
from . import views

urlpatterns = [
    path('', views.sample_view.index, name='index'),
]