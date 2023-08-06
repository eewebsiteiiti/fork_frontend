from django.db import models

# Create your models here.


class Course(models.Model):
    program = models.CharField(max_length=50)
    semester = models.IntegerField(blank=True)
    code = models.CharField(max_length=5)
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.code


class Elective(models.Model):
    code = models.CharField(max_length=5)
    name = models.CharField(max_length=50)
    program = models.CharField(max_length=60)

    def __str__(self):
        return self.code
