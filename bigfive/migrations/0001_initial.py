# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-09-27 05:44
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Answers',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question', models.CharField(max_length=200)),
                ('q1', models.CharField(max_length=200)),
                ('q2', models.CharField(max_length=200)),
                ('q3', models.CharField(max_length=200)),
                ('q4', models.CharField(max_length=200)),
                ('q5', models.CharField(max_length=200)),
                ('q6', models.CharField(max_length=200)),
                ('q7', models.CharField(max_length=200)),
                ('q8', models.CharField(max_length=200)),
                ('q9', models.CharField(max_length=200)),
                ('q10', models.CharField(max_length=200)),
            ],
        ),
    ]