from django.urls import path, include
from rest_framework import routers
from todo.views import UserViewSet, TaskViewSet

router = routers.DefaultRouter()

router.register(r'users', UserViewSet)
router.register(r'tasks', TaskViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
