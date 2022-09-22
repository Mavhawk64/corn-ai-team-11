from django.contrib import admin
from django.urls import path,include 
from django.contrib.auth import views as auth

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('Home.urls')), 

    path('account/', include('Account.urls')), 
]
