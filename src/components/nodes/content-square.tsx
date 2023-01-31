import React from 'react'
import { NodeProps, Handle, Position } from 'reactflow';

/*
  Position é um enum, facilita em que ponto do elemento se coloca os handles(As conexões)
*/

const ContetntSquare = (props: NodeProps) => {
  return (
    <div className='bg-violet-500 rounded w-[200px] h-[200px]'>
        <Handle
         id='right'
         type='source'
         position={Position.Right}
         className='-right-5 w-3 h-3 border-2 bg-transparent bg-blue-400/80'
        />
         
        <Handle
         id='left' 
         type='source' 
         position={Position.Left}
         className='-left-5 w-3 h-3 border-2 bg-transparent bg-blue-400/80'
        />

        <Handle
         id='top'
         type='source'
         position={Position.Top}
         className='-top-5 w-3 h-3 border-2 bg-transparent bg-blue-400/80'
        />
         
        <Handle
         id='bootom' 
         type='source' 
         position={Position.Bottom}
         className='-bottom-5 w-3 h-3 border-2 bg-transparent bg-blue-400/80'
        />
    </div>
  )
}

export default ContetntSquare