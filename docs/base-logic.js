const elem = document.getElementById('3d-graph');

const Graph = ForceGraph3D()(elem)
    .jsonUrl('./base.json')
    .nodeVisibility(node => node.group !== "z")
    .nodeRelSize(5)
    .nodeColor(node => node.opacity ? "rgba(255, 255, 255, 0.2)" : node.group === "c" ? "red" : node.group === "g" ? "pink" : node.group === "l" ? "orange" : node.group === "m" ? "yellow" : node.group === "n" ? "green" : node.group === "p" ? "teal" : node.group === "r" ? "blue" : "purple")
    .linkDirectionalParticles(link => link.particle ? 1 : 0)
    .linkDirectionalParticleSpeed(0.002)
    .linkDirectionalParticleWidth(2)
    .warmupTicks(100)
    .cooldownTicks(0)
    .linkColor("colour")
    .linkDirectionalParticleColor("colour")
