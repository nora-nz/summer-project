const elem = document.getElementById('3d-graph');

const Graph = ForceGraph3D()(elem)
    .jsonUrl('./non-zero.json')
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
    .linkWidth(1)
    .linkOpacity(0.4)
    .linkThreeObjectExtend(true)
        .linkThreeObject(link => {
          // extend link with text sprite
          const sprite = new SpriteText(`reaction: ${link.name}, flux: ${link.flux}`);
          sprite.color = 'lightgrey';
          sprite.textHeight = 1.5;
          return sprite;
        })
    .linkPositionUpdate((sprite, { start, end }) => {
          const middlePos = Object.assign(...['x', 'y', 'z'].map(c => ({
            [c]: start[c] + (end[c] - start[c]) / 2 // calc middle point
          })));

          // Position sprite
          Object.assign(sprite.position, middlePos);
        });;
