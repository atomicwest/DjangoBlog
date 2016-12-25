from django.conf.urls import url
from . import views

#the first url calls the index function of the views.py file
urlpatterns = [
    url(r'^$',views.index, name='index'),
    ]
