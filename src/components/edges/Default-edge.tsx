import React from 'react';
import { EdgeProps, getBezierPath } from 'reactflow';

export default function DefaultEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  data,
  markerEnd,
}: EdgeProps) {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
      <path
        id={id}
        style={style}
        className="react-flow__edge-path stroke-2 stroke-zinc"
        d={edgePath}
        markerEnd={markerEnd}
      />
  );
}