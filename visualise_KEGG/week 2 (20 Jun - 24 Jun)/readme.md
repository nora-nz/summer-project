New folder to break info down to weeks but keep them easily downloadable

hsa00250.xml - can also be found in this repository at: data/raw/sample1/hsa00250.xml KEGG pathway map of Alanine, aspartate and glutamate metabolism, required for "xml parser" jupyter notebook. Downloaded from https://www.genome.jp/kegg-bin/show_pathway?hsa00250.

index.html and canvas.js - can also be found in this repository at: scripts/index.html & scripts/canvas.js Contain scripts for outputting a KEGG pathway map prototype from data/raw/sample1/hsa00250.xml using data extracted through notebooks/xml parser.ipynb.

canvas image.jpg - can also be found in this repository at: assets/canvas image.JPG This image is what the final output looks like after running notebooks/xml parser.ipynb on data/raw/sample1/hsa00250.xml and then using the resulting .json files in scripts/index.html & scripts/canvas.js. Legend:

- green squares and text: links to other pathway maps
- blue squares and text: genes
- pink squares and text: compounds
- black squares and text: orthologs
- black arrows: relationships
- pink arrows: reactions

xml parser.ipynb - can also be found in this repository at: notebooks/xml parser.ipynb Contains script for parsing a KEGG pathway map .xml file, collecting data from it and outputting the resulting dataframes into .json files. The example KEGG pathway map can be found in data/raw/sample1/hsa00250.xml. Further explanation inside notebook.

export.json, reactions_export.json, relations_export.json - can also be found in this repository at: results/export.json, results/reactions_export.json, and results/relations_export.json. Examples of .json files resulting from notebooks/xml parser.ipynb. They can be created through the notebook as well but this is how it looks when I do it.
