from django.db import models
from django.utils import timezone


class Title(models.Model):
    habit_title = models.CharField(max_length=100)

    def __str__(self):
        return self.habit_title  


class HabitsModel(models.Model):
    title = models.ForeignKey(Title, on_delete=models.CASCADE)
    task = models.CharField(max_length=100)
    date = models.DateTimeField(default=timezone.now(), blank=True, null=True)
    completed = models.BooleanField(default=False, blank=True, null=True)

    def __str__(self):
        return self.task

