from rest_framework import serializers
from .models import Course, Elective

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'
    
    def create(self,validated_data):
        course = Course.objects.create(program=validated_data.get('program'),
                                           semester=validated_data.get('semester'),
                                         name=validated_data.get('name'),
                                           code=validated_data.get('code'))
        return course


class ElectiveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Elective
        fields = '__all__'

    def create(self, validated_data):
        elective = Elective.objects.create(program=validated_data.get('program'),
                                       name=validated_data.get('name'),
                                       code=validated_data.get('code'))
        return elective
