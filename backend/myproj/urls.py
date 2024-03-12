from django.contrib import admin
from django.urls import path,include
from rest_framework_simplejwt.views import TokenObtainPairView

urlpatterns = [
    path('login/', TokenObtainPairView.as_view()),
    path('admin/', admin.site.urls),
    path('', include("base.urls")),
    path('auth/', include('django.contrib.auth.urls')),  # Include Django's authentication URLs
]