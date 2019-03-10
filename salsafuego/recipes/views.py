from django.http import HttpResponse, Http404
from django.shortcuts import render

from .models import Recipe, Ingredient, Preparation

# Create your views here.
def recipes(request):
    context = {
        "recipes": Recipe.objects.all()
    }
    return render(request, "recipes/index.html", context)

# def recipe_collection(request):
#     return render(request, "recipes/recipe_collection.html", context)

def recipe_details(request, slug):
    try:
        recipe = Recipe.objects.get(slug=slug)
    except Recipe.DoesNotExist:
        raise Http404("Recipe does not exist.")
    context = {
        "recipe": recipe
    }
    return render(request, "recipes/recipe_details.html", context)
