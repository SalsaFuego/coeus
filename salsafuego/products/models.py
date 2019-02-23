from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(unique=True, max_length=128)
    slug = models.SlugField(unique=True, max_length=128)
    description = models.CharField(max_length=4096)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    product_image = models.ImageField(upload_to='product_images', blank=True, null=True)
    is_published = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.name}"



class ProductVariant(models.Model):
    product = models.ForeignKey(
        Product,
        related_name='variants',
        on_delete=models.CASCADE
    )
    sku = models.CharField(unique=True, max_length=32)
    volume = models.IntegerField(blank=True, null=True)
    unit = models.CharField(max_length=16)
    price_override = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        blank=True,
        null=True
    )

    def __str__(self):
        return f"{self.product} {self.volume}{self.unit} ({self.sku})"



class NutritionFact(models.Model):
    product = models.ForeignKey(
        Product,
        related_name='nutrition_facts',
        on_delete=models.CASCADE
    )
    calories = models.IntegerField(default=0)
    total_fat = models.IntegerField(default=0)
    saturated_fat = models.IntegerField(default=0)
    trans_fat = models.IntegerField(default=0)
    sodium = models.IntegerField(default=0)
    total_carbohydrate = models.IntegerField(default=0)
    total_sugars = models.IntegerField(default=0)
    added_sugars = models.IntegerField(default=0)
    protein = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.product} Nutrition Facts"



class Ingredient(models.Model):
    product = models.ManyToManyField(
        Product,
        blank=True,
        related_name="ingredients"
    )
    name = models.CharField(unique=True, max_length=64)
    order_by = models.IntegerField(default=99)

    def __str__(self):
        return f"{self.name}"
