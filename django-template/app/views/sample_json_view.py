from django.shortcuts import render
from django.views.generic import View
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie
from django.http.response import JsonResponse
import logging
logger = logging.getLogger(__name__)

class SampleJsonView(View):

    @method_decorator(ensure_csrf_cookie)
    def get(self, request, *args, **kwargs):
        json_data = {
            'data': "Hello world",
        }
        logger.info(json_data)
        return JsonResponse(json_data)

    @method_decorator(ensure_csrf_cookie)
    def post(self, request, *args, **kwargs):
        json_data = {
            'data': "Hello world by POST",
        }
        logger.info(json_data)
        return JsonResponse(json_data)
