from django.shortcuts import render


def index(request):
    return render(request, 'wmlapp/index.html')


def cn(request):
    return render(request, 'wmlapp/cn.html')
