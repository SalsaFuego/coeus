from django.db import models
from products.models import Product

# Create your models here.
class Recipe(models.Model):
    product = models.ForeignKey(
        Product,
        related_name='recipes',
        on_delete=models.CASCADE
    )
    name = models.CharField(unique=True, max_length=128)
    slug = models.SlugField(unique=True, max_length=128)
    servings = models.IntegerField(default=1)
    prep_time = models.IntegerField(blank=True, null=True)
    cook_time = models.IntegerField(blank=True, null=True)
    rating = models.DecimalField(max_digits=3, decimal_places=2)
    is_published = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.name}"

class Ingredient(models.Model):
    recipe = models.ForeignKey(
        Recipe,
        related_name='ingredients',
        on_delete=models.CASCADE
    )
    header = models.CharField(max_length=128, blank=True)
    ingredients = models.CharField(max_length=2048)
    order_by = models.IntegerField(default=99)

    def __str__(self):
        return f"{self.recipe} Ingredients Set {self.order_by}"

class Preparation(models.Model):
    recipe = models.ForeignKey(
        Recipe,
        related_name='preparation',
        on_delete=models.CASCADE
    )
    header = models.CharField(max_length=128, blank=True)
    instructions = models.CharField(max_length=2048)
    order_by = models.IntegerField(default=99)

    def __str__(self):
        return f"{self.recipe} Preparation Set {self.order_by}"
