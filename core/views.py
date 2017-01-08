from django.shortcuts import render

def index(request):
    return render(request, 'core/home.html')

def projects(request):
    return render(request, 'core/template.html',{'data': ['Most recent project:', 'Eos Mecha Concept']})

def contact(request):
    return render(request, 'core/template.html', {'data': ['Contact me at', 'ogjdne@gmail.com']})