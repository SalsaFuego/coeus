# Generated by Django 2.1.5 on 2019-03-04 01:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('merch', '0002_merchcollection_merch'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='merchcollection',
            name='merch',
        ),
        migrations.AddField(
            model_name='merch',
            name='collection',
            field=models.ForeignKey(default='mrah', on_delete=django.db.models.deletion.CASCADE, related_name='objects', to='merch.MerchCollection'),
            preserve_default=False,
        ),
    ]