from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return HttpResponse("<h1>Donut Blog</h1><br><a href='https://atomicprime.wordpress.com'>My blog</a>")