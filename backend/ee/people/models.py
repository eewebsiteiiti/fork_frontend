from django.db import models
from django_base64field.fields import Base64Field
# Create your models here.


class Staff(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    image = models.ImageField(blank=True, null=True, upload_to='images/')

    def __str__(self):
        return self.name


class Faculty(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    details = models.CharField(max_length=10000)
    address = models.CharField(max_length=500, blank=True)
    link = models.URLField(blank=True)
    image = models.ImageField(blank=True, null=True, upload_to='images/')

    def __str__(self):
        return self.name


class Phd(models.Model):
    name = models.CharField(max_length=100)
    roll_no = models.CharField(max_length=50)
    image = models.ImageField(blank=True, null=True, upload_to='images/')
    details = models.CharField(max_length=1000, blank=True)
    year = models.IntegerField(max_length=4)

    def __str__(self):
        return self.name


class MTech(models.Model):
    name = models.CharField(max_length=100)
    roll_no = models.CharField(max_length=50)
    image = models.ImageField(blank=True, null=True, upload_to='images/')
    year = models.IntegerField(max_length=4)

    def __str__(self):
        return self.name


class BTech(models.Model):
    name = models.CharField(max_length=100)
    roll_no = models.CharField(max_length=50)
    image = models.ImageField(blank=True, null=True, upload_to='images/')
    year = models.IntegerField(max_length=4)

    def __str__(self):
        return self.name


class Alumni(models.Model):
    name = models.CharField(max_length=100)
    roll_no = models.CharField(max_length=50)
    program = models.CharField(max_length=10000)
    date = models.CharField(max_length=50)
    image = models.ImageField(blank=True, null=True, upload_to='images/')
    year = models.IntegerField(max_length=4)

    def __str__(self):
        return self.name
