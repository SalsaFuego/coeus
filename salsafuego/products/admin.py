from django.contrib import admin

from .models import Product, ProductVariant, NutritionFact, Ingredient
# Register your models here.
admin.site.register(Product)
admin.site.register(ProductVariant)
admin.site.register(NutritionFact)
admin.site.register(Ingredient)
