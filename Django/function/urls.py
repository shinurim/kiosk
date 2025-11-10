from django.urls import path
from . import views

urlpatterns = [
    path('api/nav/', views.nav_list),
    path('api/burgers/', views.burger_list),
    path('api/burgerSet/', views.burgerSet_list),
    path('api/drinks/', views.drinks_list),
    path('api/sides/', views.sides_list),
]
