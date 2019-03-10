from django.urls import path

from . import views

urlpatterns = [
    path("", views.recipes, name="recipes"),
    # path("<collection:collection>/", views.recipe_collection, name="recipe_collection"),
    path("<slug:slug>/", views.recipe_details, name="recipe_details")
]
