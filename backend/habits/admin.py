from django.contrib import admin
from .models import HabitsModel, Title


@admin.register(Title)
class AdminHabitsTitle(admin.ModelAdmin):
    pass

@admin.register(HabitsModel)
class AdminHabits(admin.ModelAdmin):
    pass

