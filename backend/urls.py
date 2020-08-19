from django.contrib import admin
from django.urls import path, include

admin.autodiscover()

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('authentication.urls')),
    path('api/reports/', include('iereport.urls')),
    path('', include('frontend.urls'))
]