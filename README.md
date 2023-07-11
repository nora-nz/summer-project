<h2>iCardio 3D force directed graph metabolic modeller</h2>
https://nora-nz.github.io/summer-project
<h3>About the project</h3>

This visualisation tool was created to better understand metabolic flux changes in heart muscle cells as part of a summer internship at the University of Strathclyde, Glasgow.

In-silico modelling of metabolic flux could help identify potential targets for research. Using the metabolic reactions of cardiomyocytes and changing the underlying conditions, such as a lack of glucose, models how a diabetic cell could be function when affected by diabetic cardiomyopathy. This disease is characterised by an abnormal myocardial structure and performance, and may be why diabetic people are more likely to die of heart failure than non-diabetic people. Visualising thousands of reactions in three dimensions can help grasp the complexity of cellular metabolism.

The dataset used is the iCardio model (Dougherty et al., 2021) which contains 4200 reactions of 2890 compounds. The reactions in some graphs have been filtered to show only those which take part in fatty acid metabolism because heart muscle cells can utilise fatty acids as an alternative energy source when ATP is scarce.

<h3>About the graph</h3>
Spheres represent the different compounds taking part in the reactions, they are colour-coded to show which compartment in the cell they are located. The lines are individual reactions and the particles travelling down them show the direction of the reaction. Progressively greener lines show higher flux in these reactions. Hovering over any spheres or lines show the appropriate compound/reaction names. Additionally, zooming in on the reaction lines also shows the reaction name and flux value.

The side panel contains a legend, home button, and the options appropriate for each graph.

Controls: left-click/drag to rotate, mouse-wheel/middle-click/pinch-pull to zoom, right-click/two-finger drag to pan.

<h3>Acknowledgements</h3>
Supervisors: Dr Leighton Pritchard & Dr Gwyn Gould<br>
Funding: Carnegie Trust for the Universities of Scotland<br>
Graphing library: https://github.com/vasturiano/3d-force-graph
