from django.shortcuts import render
import logging
logger = logging.getLogger(__name__)

def index(request):
    context = {
        'message': "Hello, world. You're at the polls index.",
    }
    logger.info(context)
    return render(request, 'index.html', context)