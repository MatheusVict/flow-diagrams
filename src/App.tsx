import React, { useCallback } from 'react';
import ReactFlow, { Background, Connection, ConnectionMode, Controls, Node, addEdge, useEdgesState } from 'reactflow';
import 'reactflow/dist/style.css';
import { zinc } from "tailwindcss/colors";
import './global.css'
import ContetntSquare from './components/nodes/content-square';

/*
  Notes: 
  Nodes = Tudo que vai aparecer em tela(Pode ter seu próprio estilo e configuração),
  Edges = As conexões(As linhas de conexão, também possuindo suas próprias configurações)
*/

const NODE_TYPES = {
  square: ContetntSquare,
}

// data = transporta informações da aplicação até os Nodes
const INITIAL_NODES = [
  {
    id: crypto.randomUUID(),
    type: 'square',
    position: {
      x: 200,
      y: 400,
    },
    data: {}
  },
  {
    id: crypto.randomUUID(),
    type: 'square',
    position: {
      x: 1000,
      y: 400,
    },
    data: {}
  },
] satisfies Node[]

function App() {
  const [edges, setEdges, onEdgesChanges] = useEdgesState([]);

  const onConnect = useCallback((connection: Connection) => {
    return setEdges(edges => addEdge(connection, edges))
  }, [])
 
  return (
    <div className='w-screen h-screen'>
      <ReactFlow 
      nodeTypes={NODE_TYPES}
      nodes={INITIAL_NODES}
      edges={edges}
      onEdgesChange={onEdgesChanges}
      onConnect={onConnect}
      connectionMode={ConnectionMode.Loose}
      >
        <Background
          gap={12}
          size={2}
          color={zinc[200]}
        />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default App;
