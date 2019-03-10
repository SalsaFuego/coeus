from django.urls import path

from . import views

urlpatterns = [
    path("", views.merch, name="merch"),
    # path("<collection:collection>/", views.merch_collection, name="merch_collection"),
    # path("<slug:slug>/", views.merch_details, name="merch_details")
]
