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
print('\n====================================================\n\
===== Empieza Pelican! : ' + SITENAME + ' '+ SITEURL + ' by ' +  AUTHOR + '  ====')

PATH = 'content'

THEME = './themes/houtland-theme'

STATIC_PATHS = ['posts', 'posts/research-content', 'images','extra'] # paths copied identically from content folder.

ARTICLE_PATHS = ['posts']
ARTICLE_SAVE_AS = '{category}/{slug}.html'

USE_FOLDER_AS_CATEGORY = True


PLUGIN_PATHS = ['./pelican-selected-plugins']
PLUGINS = ['pelican-bootstrapify']

BOOTSTRAPIFY = {'img': ['img-fluid']} # bootstrapify uses beautifulsoup to apply classes after rendering, using this dictionary


# Social widget: names are used for font-awesome icons, use lowerspace
SOCIAL = ('facebook', 'https://www.facebook.com/')

DEFAULT_PAGINATION = False # the number of articles per page, use False for no pagination
RELATIVE_URLS = True  # true for deployment, see publishconf.py for publishing config
DEFAULT_DATE = 'fs' # when no date is specified in an article, just today's date

# OTHER
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None


# MORE customization stuff
SUMMARY_MAX_LENGTH = 40	      # The size (in caracters) of the summary of the articles to show in the main page.


