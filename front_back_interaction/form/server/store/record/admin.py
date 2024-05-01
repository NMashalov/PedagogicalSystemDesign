from django.contrib import admin

# Register your models here.
from .models import StudentAssessmentRecord


@admin.register(StudentAssessmentRecord)
class StudentAssessmentRecordAdmin(admin.ModelAdmin):
    list_display = ["id", "student", "score"]