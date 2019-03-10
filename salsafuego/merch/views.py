from django.http import HttpResponse, Http404
from django.shortcuts import render

from .models import Merch

# Create your views here.
def merch(request):
    context = {
        "merch": Merch.objects.all()
    }
    return render(request, "merch/index.html")

# def merch_collection(request, collection):
#     return render(request, "merch/merch_collection.html", context)

# def merch_details(request, slug):
#     return render(request, "merch/merch_details.html", context)
