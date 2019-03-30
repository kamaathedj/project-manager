from rest_framework import viewsets
from projects.models import projects
from .serializers import projectSerializer


class projectViewsets(viewsets.ModelViewSet):
    serializer_class=projectSerializer
    queryset=projects.objects.order_by('-id')



