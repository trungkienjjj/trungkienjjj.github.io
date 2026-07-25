import { useMemo } from "react";
import { forceCollide, forceSimulation, forceX, forceY, type SimulationNodeDatum } from "d3-force";
import { scaleLinear } from "d3-scale";
import { projects } from "../../data/projects";

interface LayoutNode extends SimulationNodeDatum {
  id: string;
  radius: number;
  targetX: number;
  targetY: number;
}

const targets: Record<string, [number, number]> = {
  "deepseek-ocr": [145, 145],
  "historical-ocr": [245, 285],
  "legal-graph": [735, 145],
  "algorithm-benchmark": [610, 235],
  "model-merging": [420, 230],
  spendsense: [540, 475],
  "weather-monitor": [750, 475],
  "hr-analytics": [145, 485],
  "netflix-recommender": [300, 505],
  "wdi-dashboard": [220, 390],
  vietsport: [360, 330]
};

export function useClusterLayout() {
  return useMemo(() => {
    const radiusScale = scaleLinear().domain([1, 4]).range([31, 43]);
    const nodes: LayoutNode[] = projects.map((project, index) => {
      const [targetX, targetY] =
        targets[project.id] ?? [120 + (index % 4) * 210, 120 + Math.floor(index / 4) * 175];
      return {
        id: project.id,
        x: targetX,
        y: targetY,
        targetX,
        targetY,
        radius: radiusScale(project.graphTags.length)
      };
    });

    const simulation = forceSimulation(nodes)
      .force("x", forceX<LayoutNode>((node) => node.targetX).strength(0.35))
      .force("y", forceY<LayoutNode>((node) => node.targetY).strength(0.35))
      .force("collide", forceCollide<LayoutNode>((node) => node.radius + 18).iterations(3))
      .stop();

    for (let tick = 0; tick < 90; tick += 1) simulation.tick();

    return new Map(nodes.map((node) => [node.id, node]));
  }, []);
}
