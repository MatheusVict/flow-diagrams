import React, { useCallback } from 'react';
import ReactFlow, { Background, Connection, ConnectionMode, Controls, Node, addEdge, useEdgesState, useNodesState } from 'reactflow';
import 'reactflow/dist/style.css';
import { zinc } from "tailwindcss/colors";
import './global.css'
import ContetntSquare from './components/nodes/content-square';
import DefaultEdge from './components/edges/Default-edge';
import * as Toolbar from '@radix-ui/react-toolbar';

/*
  Notes: 
  Nodes = Tudo que vai aparecer em tela(Pode ter seu próprio estilo e configuração),
  Edges = As conexões(As linhas de conexão, também possuindo suas próprias configurações)
*/

const NODE_TYPES = {
  square: ContetntSquare,
}

const EDGE_TYPES = {
  default: DefaultEdge,
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
  const [nodes, setNodes, onNodesChanges] = useNodesState(INITIAL_NODES);

  const onConnect = useCallback((connection: Connection) => {
    return setEdges(edges => addEdge(connection, edges))
  }, [])

  function addSquareNode() {
    setNodes(nodes => [
      ...nodes,
      {
        id: crypto.randomUUID(),
      type: 'square',
      position: {
        x: 750,
        y: 350,
      },
      data: {}
      }
    ])
  }
 
  return (
    <div className='w-screen h-screen'>
      <ReactFlow 
      nodeTypes={NODE_TYPES}
      edgeTypes={EDGE_TYPES}
      nodes={nodes}
      edges={edges}
      onEdgesChange={onEdgesChanges}
      onConnect={onConnect}
      onNodesChange={onNodesChanges}
      connectionMode={ConnectionMode.Loose}
      defaultEdgeOptions={{
        type: 'default'
      }}
      >
        <Background
          gap={12}
          size={2}
          color={zinc[200]}
        />
        <Controls />
      </ReactFlow>

      <Toolbar.Root 
      className='fixed bottom-20 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg border border-zinc-300 px-8 h-20 w-96 overflow-hidden'
      >
        <Toolbar.Button 
          className='w-32 h-32 mt-6 transition-transform hover:-translate-y-2 bg-violet-500 rounded'
          onClick={addSquareNode}
        >

        </Toolbar.Button>
      </Toolbar.Root>
    </div>
  );
}

export default App;
