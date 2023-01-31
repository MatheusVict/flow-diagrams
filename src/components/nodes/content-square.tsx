import React from 'react'
import { NodeProps, Handle, Position } from 'reactflow';

/*
  Position é um enum, facilita em que ponto do elemento se coloca os handles(As conexões)
*/

const ContetntSquare = (props: NodeProps) => {
  return (
    <div className='bg-violet-500 rounded w-[200px] h-[200px]'>
        <Handle id='right' type='source' position={Position.Right}/>
        <Handle id='left' type='source' position={Position.Left}/>
    </div>
  )
}

export default ContetntSquare