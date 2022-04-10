from django.db import models
from django.utils import timezone
from django.conf import settings


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


class UserHabitsModel(models.Model):
    # user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.PROTECT, null=True, blank=True)
    title = models.CharField(max_length=50, default='My Routine')
    # task = models.CharField(max_length=100)

    def __str__(self):
        return self.title

class Tasks(models.Model):
    habit = models.ForeignKey(UserHabitsModel, on_delete=models.PROTECT)
    task = models.CharField(max_length=100)
    date = models.TimeField(default=timezone.now().strftime('%H:%M'), blank=True, null=True)
    completed = models.BooleanField(default=False, blank=True, null=True)


    def __str__(self):
        return f'{self.task} - {self.habit.title}'