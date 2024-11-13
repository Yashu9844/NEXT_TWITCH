import {create } from 'zustand'



export enum ChatVarient{
    CHAT ='CHAT',
    COMMUNITY ='COMMUNITY',
}

interface ChatSideBarProps {
    collapsed: boolean,
    varient: ChatVarient,
    onExpand: ()=>void,
    onCollapse: ()=>void,
    onChangeVarient: (varient:ChatVarient)=>void,
}

export const useChatSideBar =  create<ChatSideBarProps>((set)=>(
    {
        collapsed:false,
        varient:ChatVarient.CHAT,
        onExpand:()=>set(()=>({collapsed:false})),
        onCollapse:()=>set(()=>({collapsed:true})),
        onChangeVarient:(varient:ChatVarient)=>set(()=>({varient}))
    }
))
