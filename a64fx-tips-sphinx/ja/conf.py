# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'A64FXプロセッサ向けチューニングtips集'
copyright = '2023, 理化学研究所 計算科学研究センター'
author = '理化学研究所 計算科学研究センター'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = []

templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']

language = 'ja'

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

#html_theme = 'alabaster'
html_theme = 'bizstyle'
html_static_path = ['_static']

html_sidebars = {
  '**': ['globaltoc.html', 'relations.html', 'searchbox.html'],
  'index': ['relations.html', 'searchbox.html'],
}

html_title = 'A64FX向けチューニングドキュメント整備'

html_use_index = False
