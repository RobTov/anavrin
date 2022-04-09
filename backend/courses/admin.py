from django.contrib import admin
from .models import Courses, Lessons

@admin.register(Courses)
class CoursesAdmin(admin.ModelAdmin):
    pass


@admin.register(Lessons)
class LessonsAdmin(admin.ModelAdmin):
    pass
