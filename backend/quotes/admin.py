from django.contrib import admin
from .models import Quotes

@admin.register(Quotes)
class QuotesAdmin(admin.ModelAdmin):
    pass
