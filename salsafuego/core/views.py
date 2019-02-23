from django.http import HttpResponse, Http404
from django.shortcuts import render

# Create your views here.
def index(request):
    context = {
        "test": "this is a test"
    }
    return render(request, "core/index.html")
