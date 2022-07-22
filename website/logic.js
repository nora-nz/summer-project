const elem = document.getElementById('3d-graph');

const Graph = ForceGraph3D()(elem)
    .graphData(gData)
    .nodeVisibility(node => node.group !== "z")
    .nodeRelSize(5)
    .nodeColor(node => node.group === "c" ? "red" : node.group === "g" ? "pink" : node.group === "l" ? "orange" : node.group === "m" ? "yellow" : node.group === "n" ? "green" : node.group === "p" ? "teal" : node.group === "r" ? "blue" : "purple")
    .linkDirectionalParticles(1)
    .linkDirectionalParticleSpeed(0.02)
    .linkDirectionalParticleWidth(2)
    .warmupTicks(20)
    .cooldownTicks(0)
    .linkColor("colour")
    .linkDirectionalParticleColor("colour");