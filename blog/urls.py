from django.conf.urls import url, include
from django.views.generic import ListView, DetailView
from blog.models import Post

urlpatterns = [
        #retrieve and sort descending by dates, limit by the first 10
        url(r'^$', 
            ListView.as_view(queryset=Post.objects.all().order_by("-date")[:10],
            template_name="blog/blog.html"
        ))
    ]