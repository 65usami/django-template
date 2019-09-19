from django.db import models

class SampleTable(models.Model):
    sample_int = models.IntegerField("Sample IntegerField", default=0)
    sample_char = models.CharField("Sample CharField", max_length=200)
    sample_text = models.TextField("Sample TextField", default="")
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)
