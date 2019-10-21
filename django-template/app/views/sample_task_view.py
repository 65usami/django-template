from django.views.generic import View
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie
from django.http.response import JsonResponse
import logging
logger = logging.getLogger(__name__)

from celery.result import AsyncResult
from ..tasks.sample_task import add

class SampleTaskView(View):

    @method_decorator(ensure_csrf_cookie)
    def get(self, request, *args, **kwargs):
        task_id = add.delay(1, 2)
        result = AsyncResult(task_id)
        data =  {
            'task_id' : str(task_id),
            'result_status' : str(result.state),
            'is_ready' : str(result.ready())
         }
        json_data = {
            'data': data,
        }
        logger.info(json_data)
        return JsonResponse(json_data)
