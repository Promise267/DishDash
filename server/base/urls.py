from django.urls import path
from . import views
from django.conf.urls.static import static
from server import settings

urlpatterns = [
    path('getUser/', views.getUsers),
    path('addUser/', views.addUser)
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)