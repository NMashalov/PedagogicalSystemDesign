from django.contrib import admin
from django.contrib import admin
from reversion.admin import VersionAdmin

@admin.register(YourModel)
class YourModelAdmin(VersionAdmin):

    pass
# Register your models here.
