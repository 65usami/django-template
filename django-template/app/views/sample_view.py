from django.shortcuts import render
from django.views.generic import View
import logging
logger = logging.getLogger(__name__)

class MyFormView(View):
    def get(self, request, *args, **kwargs):
        context = {
            'message': "Hello, world!!",
        }
        logger.info(context)
        return render(request, 'index.html', context)

    def post(self, request, *args, **kwargs):
        return render(request, 'index.html', context)
