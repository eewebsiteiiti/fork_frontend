from django.db import models

# Create your models here.
class News(models.Model):
    title = models.CharField(max_length=500)
    description = models.CharField(max_length=1000)
    date = models.DateField()
    link = models.URLField(blank=True)
    image = models.ImageField(blank=True, null=True, upload_to='images/')

    def __str__(self):
        return self.title
        