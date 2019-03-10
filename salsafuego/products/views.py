from django.http import HttpResponse, Http404
from django.shortcuts import render

from .models import Product, ProductVariant, NutritionFact, Ingredient

# Create your views here.
def products(request):
    context = {
        "products": Product.objects.all()
    }
    return render(request, "products/index.html", context)

# def product_collection(request, collection):
#     return render(request, "products/product_collection.html", context)

def product_details(request, slug):
    try:
        product = Product.objects.get(slug=slug)
        nutrition_facts = NutritionFact.objects.get(product=product)
    except Product.DoesNotExist:
        raise Http404("Product does not exist.")
    except NutritionFact.DoesNotExist:
        raise Http404("Nutrition facts do not exist.")
    context = {
        "product": product,
        "product_variants": ProductVariant.objects.filter(product=product).order_by('-volume'),
        "ingredients": Ingredient.objects.filter(product=product).order_by('order_by', 'name'),
        "nutrition_facts": nutrition_facts,
        "recipes": product.recipes.all() # Returns all Recipe objects related to product
    }
    return render(request, "products/product_details.html", context)
