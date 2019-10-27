from django.urls import path
from .views.sample_view import SampleView
from .views.sample_json_view import SampleJsonView
from .views.sample_task_view import SampleTaskView
from .views.sample_mongodb_view import SampleMongodbView

urlpatterns = [
    path('', SampleView.as_view(), name='index'),
    path('api/data', SampleJsonView.as_view(), name='api_data'),
    path('api/task', SampleTaskView.as_view(), name='api_task'),
    path('api/mongodb', SampleMongodbView.as_view(), name='api_mongodb'),
]