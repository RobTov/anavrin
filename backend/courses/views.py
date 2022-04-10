from rest_framework import generics
from . import serializers
from . import models


class CoursesListView(generics.ListCreateAPIView):
    queryset = models.Courses.objects.all()
    serializer_class = serializers.CourseSerializer


class CoursesDetailDestroy(generics.RetrieveUpdateDestroyAPIView):
    lookup_field = 'pk'
    queryset = models.Courses.objects.all()
    serializer_class = serializers.CourseSerializer


class LessonsListUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    lookup_field = 'pk'
    queryset = models.Lessons.objects.all()
    serializer_class = serializers.LessonsSerializer


class LessonsList(generics.ListAPIView):
    queryset = models.Lessons.objects.all()
    serializer_class = serializers.LessonsSerializer