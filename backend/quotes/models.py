from django.db import models


class Quotes(models.Model):
    text = models.CharField(max_length=100)
    author = models.CharField(max_length=30)

    def __str__(self):
        return f'{self.author}: {self.pk}'