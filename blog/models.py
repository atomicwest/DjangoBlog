from __future__ import unicode_literals

from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=140)
    body = models.TextField()
    date = models.DateTimeField()
    
    #reference the title for Post.title
    #use def __unicode__ for python 2
    def __str__(self):
        return self.title