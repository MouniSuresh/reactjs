import React,{useState} from 'react'

function TabComponents() {
    const[activeTab,setActivetab]=useState("Home")
  return (
    <div style={Styles.container}>
        <h1>Hi,Tab-component</h1>
        <div style={Styles.tabContainer}>
         <button onClick={()=>setActivetab("Home")}>home</button>
         <button onClick={()=>setActivetab("About")}>About</button>
         <button onClick={()=>setActivetab("Content")}>Content</button>
        </div>
        <div style={Styles.ContentBox}></div>
         {activeTab === "Home" && <p>Home</p>}
         {activeTab === "About" && <p>Reactjs seclab</p>}
         {activeTab === "Content" && <p>technical team</p>}
    </div>
  )
}
const Styles={
    container:{
        minHeight:"100px",
        padding:"20px",
        border:"1px solid",
    },
    tabContainer:{
        padding:"20px",
        border:"none",
        margin:"20px",
    },
    ContentBox:{
        height:"100px",
        width:"300px",
        marginLeft:"30px",
        background:"lightblue",
        paddingTop:"10px"
    }

}

export default TabComponents
