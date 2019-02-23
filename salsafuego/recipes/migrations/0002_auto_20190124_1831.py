# Generated by Django 2.1.5 on 2019-01-24 18:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ingredient',
            name='header',
            field=models.CharField(blank=True, default='', max_length=128),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='preparation',
            name='header',
            field=models.CharField(blank=True, default='', max_length=128),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='recipe',
            name='name',
            field=models.CharField(max_length=128, unique=True),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='slug',
            field=models.SlugField(max_length=128, unique=True),
        ),
    ]