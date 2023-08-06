from django.contrib import admin
from .models import Books, StudentAwards,FacultyAwards
# Register your models here.
admin.site.register(Books)
admin.site.register(StudentAwards)
admin.site.register(FacultyAwards)
