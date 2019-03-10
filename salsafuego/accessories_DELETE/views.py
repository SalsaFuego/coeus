from django.http import HttpResponse, Http404
from django.shortcuts import render

# Create your views here.
def accessories(request):
    context = {
        "test": "this is a test"
    }
    return HttpResponse("accessories")
