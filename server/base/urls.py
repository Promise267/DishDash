from django.urls import path
from . import views

urlpatterns = [
    path('getUser/', views.getUsers),
    path('addUser/', views.addUser)
]