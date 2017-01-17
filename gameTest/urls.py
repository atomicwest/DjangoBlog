from django.conf.urls import url, include
from django.views.generic import ListView, DetailView
from gameTest.models import Entry

urlpatterns = [
        # #retrieve and sort descending by dates, limit by the first 10
        url(r'^$', 
            ListView.as_view(queryset=Entry.objects.all().order_by("-date")[:10],
            template_name="gameTest/leaderboard.html"
        ))
        # url(r'^(?P<pk>\d+)$', DetailView.as_view(model=Post,
        #         template_name='blog/post.html')
        #     )
    ]