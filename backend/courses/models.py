from django.db import models
from django.conf import settings

class Courses(models.Model):
    title = models.CharField(max_length=100)
    current_user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.PROTECT, null=True, blank=True)
    user_progress = models.IntegerField(default=0)
    is_completed = models.BooleanField(default=False)
    description = models.CharField(max_length=255, default='Default course description')
    number_of_lessons = models.IntegerField()

    def __str__(self):
        return self.title


class Lessons(models.Model):
    course = models.ForeignKey(Courses, on_delete=models.PROTECT)
    is_completed = models.BooleanField(default=False)
    lesson_number = models.IntegerField(default=1)
    content = models.TextField()

    def __str__(self):
        return f'lesson: {self.lesson_number}/{self.course.title}'
        