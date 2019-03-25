from django.db import models

# Create your models here.
class projects(models.Model):

    title=models.CharField(max_length=100)
    category=models.CharField(max_length=50)
    done=models.BooleanField(default=True)
    updated=models.DateField(auto_now=True)


    def __str__(self):
        return self.category
    
    class Meta:
        verbose_name_plural="Projects"
        


