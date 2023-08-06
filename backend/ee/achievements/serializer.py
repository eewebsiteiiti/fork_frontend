from rest_framework import serializers
from .models import Books, StudentAwards, FacultyAwards

class BooksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Books
        fields = '__all__'

    def create(self,validated_data):
        Book = Books.objects.create(name=validated_data.get('name'),
                                           year=validated_data.get('year'),
                                           author=validated_data.get('author'),
                                    publication=validated_data.get('publication'),
                                    image=validated_data.get('image'))
        return Book


class StudentAwardsSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentAwards
        fields = '__all__'

    def create(self, validated_data):
        student = StudentAwards.objects.create(name=validated_data.get('name'),
                                    year=validated_data.get('year'),
                                    award=validated_data.get('award'),
                                    roll_no=validated_data.get(
                                        'roll_no'),
                                    image=validated_data.get('image'))
        return student


class FacultyAwardsSerializer(serializers.ModelSerializer):
    class Meta:
        model = FacultyAwards
        fields = '__all__'

    def create(self, validated_data):
        faculty = FacultyAwards.objects.create(name=validated_data.get('name'),
                                    year=validated_data.get('year'),
                                    award=validated_data.get('award'),
                                    roll_no=validated_data.get('roll_no'),
                                    image=validated_data.get('image'))
        return faculty
