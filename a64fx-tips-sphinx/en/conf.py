# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'Tuning Tips for A64FX Processors'
copyright = '2023, RIKEN Center for Computational Science'
author = 'RIKEN Center for Computational Science'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = []

templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']



# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

#html_theme = 'alabaster'
html_theme = 'bizstyle'
html_static_path = ['_static']

html_sidebars = {
  '**': ['globaltoc.html', 'relations.html', 'searchbox.html'],
  'index': ['relations.html', 'searchbox.html'],
}

html_title = 'Documentation of Tuning Techniques for A64FX Processors'

html_use_index = False
