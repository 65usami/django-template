from django.urls import path
from.views.sample_view import SampleView
from.views.sample_json_view import SampleJsonView

urlpatterns = [
    path('', SampleView.as_view(), name='index'),
    path('api/data', SampleJsonView.as_view(), name='api_data'),
]