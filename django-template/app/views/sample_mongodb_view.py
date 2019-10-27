from django.views.generic import View
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie
from django.http.response import JsonResponse
import pymongo
import datetime
from bson.json_util import dumps
import logging
logger = logging.getLogger(__name__)


class SampleMongodbView(View):

    @method_decorator(ensure_csrf_cookie)
    def get(self, request, *args, **kwargs):
        client = pymongo.MongoClient(host='mongo', port=27017, username='django', password='django')
        db = client.test_from_django
        collection = db.test_collection
        now = datetime.datetime.now()
        data = {
            "data": "Hello world!!",
            "created_at": "{0:%Y-%m-%d %H:%M:%S.%f}".format(now)
            }
        collection.insert_one(data)
        pymongo_cursor_result = db.test_collection.find()
        result_list = dumps(pymongo_cursor_result)
        json_data = { "data": result_list }
        logger.info(json_data)
        return JsonResponse(json_data)
