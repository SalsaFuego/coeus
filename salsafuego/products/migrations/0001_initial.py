# Generated by Django 2.1.5 on 2019-01-22 22:22

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128)),
                ('description', models.CharField(max_length=4096)),
                ('price', models.DecimalField(decimal_places=2, max_digits=5)),
                ('is_published', models.BooleanField(default=True)),
            ],
        ),
    ]