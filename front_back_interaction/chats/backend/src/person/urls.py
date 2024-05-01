from person import views
from django.urls import path


urlpatterns = [
   path('api/user', views.user, name='user')
]