#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals
import glob
import os

DEFAULT_LANG = u'es'
TIMEZONE = 'Europe/Paris'
AUTHOR = u'sbadillo'
SITENAME = u'Houtland'


SITEURL = ''  # empty, see publishconf.py for publishing config
print('==== Empieza Pelican! : ' + SITENAME + ' '+ SITEURL + ' by ' +  AUTHOR + '  ====')

PATH = 'content'

THEME = './themes/houtland-theme'

STATIC_PATHS = ['images','extra','pages/images'] # paths copied identically from content folder.

PLUGIN_PATHS = ['./pelican-plugins']
# PLUGINS = ['jinja2content']

# Social widget: names are used for font-awesome icons, use lowerspace
SOCIAL = ('facebook', 'https://www.facebook.com/')

DEFAULT_PAGINATION = False
RELATIVE_URLS = True  # true for deployment, see publishconf.py for publishing config

# OTHER
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None


# MORE customization stuff
SUMMARY_MAX_LENGTH = 30	      # The size (in caracters) of the summary of the articles to show in the main page.


