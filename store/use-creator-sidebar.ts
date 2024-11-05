import {create } from 'zustand'

interface CreatorSideBarProps {
    collapsed: boolean,
    onExpand: ()=>void,
    onCollapse: ()=>void
}

export const useCreatorSideBar =  create<CreatorSideBarProps>((set)=>(
    {
        collapsed:false,
        onExpand:()=>set(()=>({collapsed:false})),
        onCollapse:()=>set(()=>({collapsed:true})),
    }
))
