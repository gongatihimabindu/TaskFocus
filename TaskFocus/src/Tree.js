import React from 'react'
import values from 'lodash/values'
import TreeNode from './TreeNode.js'
const data = {
    '/root' : {
        path : '/root',
        type : 'folder',
        isRoot : true,
        children : ['/root/one', '/root/two']
    },
    '/root/one' :{
        path : '/root/one',
        type : 'folder',
        children : ['/root/one/1.1']
    },
    '/root/one/1.1' :{
        path : '/root/one/1.1',
        type : 'folder',
        children : ['/bindu']
    },
    '/bindu': {
        path : '/',
        type : 'folder',
        children : []
    },
    '/root/two' :{
        path : '/root/two',
        type : 'folder',
        children : ['/root/two/2.1', '/root/two/2.2']
    },
    '/root/two/2.1' :{
        path : '/root/two/2.1',
        type : 'folder',
        children : []
    },
    '/root/two/2.2' :{
        path : '/root/two/2.2',
        type : 'folder',
        children : []
    }
}

class Tree extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            nodes : data
        }
    }
        onToggle = (node) =>{
            const {nodes} = this.state;
            nodes[node.path].isOpen = !node.isOpen
            this.setState({nodes})
            
        }
        getRootNodes=() =>{
            const {nodes} = this.state
            return values(nodes).filter(node => node.isRoot===true)
        }
        getChildNodes = (node)=>{
            const {nodes} = this.state
            if (!node.children) return [];
            return node.children.map(path => nodes[path])
        }
        render(){
            const rootNodes = this.getRootNodes();
            return(
                <div>
                    {rootNodes.map(node =>(
                        <TreeNode
                          node ={node}
                          getChildNodes = {this.getChildNodes}
                          onToggle = {this.onToggle}
                          />
                    ))}
                </div>
            )
        }
    
}

export default Tree