from __future__ import unicode_literals

from django.db import models

#leaderboard entries
class Entry(models.Model):
    name = models.CharField(max_length=40)
    score = models.IntegerField()
    date = models.DateTimeField()
    quote = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name