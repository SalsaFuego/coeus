from django.urls import path

from . import views

urlpatterns = [
    path("", views.products, name="products"),
    # path("<collection:collection>/", views.product_collection, name="product_collection"),
    path("<slug:slug>/", views.product_details, name="product_details")
]
