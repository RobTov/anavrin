from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)


class CustomAccontManager(BaseUserManager):

    def create_superuser(self, email, user_name, password, **other_fields):

        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError(
                    'Superuser must be assigned to is_staff = True'
                    )
        if other_fields.get('is_superuser') is not True:
            raise ValueError(
                'Superuser must be asigned to is_superuser = True.'
            )
        
        return self.create_user(email, user_name, password, **other_fields)
    
    def create_user(self, email, user_name, password, **other_fields):

        if not email:
            raise ValueError(_('You must provide an email address'))
            
        email = self.normalize_email(email)
        user = self.model(email = email, user_name=user_name, **other_fields)
        user.set_password(password)
        user.save()
        return user


class NewUser(AbstractBaseUser, PermissionsMixin):

    email = models.EmailField(_('email address'), unique=True)
    user_name = models.CharField(max_length=150, unique=True)
    avatar = models.ImageField(_('Image'), upload_to=upload_to, default='images/default.jpg')
    about = models.TextField(_(
            'about'
    ), max_length=500, blank=True, default='This user has no info.')
    is_staff = models.BooleanField(default=False)

    objects = CustomAccontManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['user_name', ]

    def __str__(self):
        return self.user_name