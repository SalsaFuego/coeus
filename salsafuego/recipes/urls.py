from django.urls import path

from . import views

urlpatterns = [
    path("", views.recipes, name="recipes"),
    path("<slug:slug>/", views.recipe_details, name="recipe_details")
]
