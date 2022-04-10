from rest_framework import serializers
from .models import HabitsModel, Title, UserHabitsModel, Tasks


class HabitsSerializer(serializers.ModelSerializer):

    class Meta:
        model = HabitsModel
        fields = ('__all__')


class TitleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Title
        fields = ('habit_title')


class UserHabitsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = UserHabitsModel
        fields = ('__all__')

class TasksSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tasks
        fields = ('__all__')