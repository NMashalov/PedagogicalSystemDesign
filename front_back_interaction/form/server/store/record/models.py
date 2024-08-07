from django.db import models

# Create your models here.


from django.db import models
from django.contrib.auth.models import User


class StudentAssessmentRecord(models.Model):
    student = models.ForeignKey(User, on_delete=models.CASCADE)
    score = models.IntegerField()

    def __str__(self):
        return f"{self.student.username}-Score:{self.score}"