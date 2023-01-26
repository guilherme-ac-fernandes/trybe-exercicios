from rest_framework import viewsets
from todo.serializer import UserSerializer, TaskSerializer
from todo.models import User, Task


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
