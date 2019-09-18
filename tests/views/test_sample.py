from django.test import TestCase


class SampleTest(TestCase):

    def test_root_url(self):
        response = self.client.get('/')
        self.assertEquals(response.status_code, 200)
