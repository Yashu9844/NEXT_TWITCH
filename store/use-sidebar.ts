import {create } from 'zustand'

interface SideBarProps {
    collapsed: boolean,
    onExpand: ()=>void,
    onCollapse: ()=>void
}

export const useSideBar =  create<SideBarProps>((set)=>(
    {
        collapsed:false,
        onExpand:()=>set(()=>({collapsed:false})),
        onCollapse:()=>set(()=>({collapsed:true})),
    }
))
