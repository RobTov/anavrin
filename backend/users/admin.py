from django.contrib import admin
from .models import NewUser


@admin.register(NewUser)
class UserManagerAdmin(admin.ModelAdmin):
    pass