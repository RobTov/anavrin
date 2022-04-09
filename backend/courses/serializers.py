from rest_framework import serializers
from .models import Courses, Lessons


class CourseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Courses
        fields = ('__all__')


class LessonsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Lessons
        fields = ('__all__')