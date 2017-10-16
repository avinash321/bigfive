from __future__ import unicode_literals

from django.db import models

# Create your models here.
from django.db import models
from django.utils import timezone

class Answers(models.Model):
    name = models.CharField(max_length=50)
    answers = models.CharField(max_length=100)
    score = models.CharField(max_length=100)