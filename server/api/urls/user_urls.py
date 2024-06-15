from django.urls import path
from api.views import user_views
from django.conf.urls.static import static
from server import settings

urlpatterns = [
    path('getUser/', user_views.getUsers),
    path('addUser/', user_views.addUser),
    path('findUser/', user_views.findUser),
    path('authUser/', user_views.authUser)
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)