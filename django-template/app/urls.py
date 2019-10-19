from django.urls import path
from.views.sample_view import MyFormView

urlpatterns = [
    path('', MyFormView.as_view(), name='index'),
]