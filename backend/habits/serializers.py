from rest_framework import serializers
from .models import HabitsModel, Title, UserHabitsModel


class HabitsSerializer(serializers.ModelSerializer):

    class Meta:
        model = HabitsModel
        fields = ('__all__')


class TitleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Title
        fields = ('habit_title', )


class UserHabitsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = UserHabitsModel
        fields = ('__all__', )