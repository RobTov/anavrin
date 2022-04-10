from django.contrib import admin
from .models import HabitsModel, Title, UserHabitsModel


@admin.register(Title)
class AdminHabitsTitle(admin.ModelAdmin):
    pass

@admin.register(HabitsModel)
class AdminHabits(admin.ModelAdmin):
    pass

@admin.register(UserHabitsModel)
class UserHbitsAdmin(admin.ModelAdmin):
    pass

