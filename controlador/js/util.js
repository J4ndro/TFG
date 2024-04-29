
function CatalogoComponentes() {
    let selected    
    let selectedIndex
    let menu=false
    let dialog=false
    return {
        view:({attrs})=>[

            m("div",{
                style:{
                    "width":"100%",
                    "position":"relative",
                    display:"flex",
                    height:"2rem",
                    "align-items":"center",
                    "flex-direction":"row",
                    gap:"3rem",
                    background:"white",
                }
            },
                m("span",{
                    onclick:()=>menu=!menu
                },"Componentes"),

                m("span",{
                    onclick:()=>menu=!menu  /// !!! Falta desarrollar
                },"Paginas"),

                m("div",{
                    style:{
                        "position":"absolute",
                        top: "2rem",
                        background:"white",
                        display:"flex",
                        "z-index":10,
                        "flex-direction":"column",
                        visibility: menu ? "visible" : "hidden"
                    }
                },
                attrs.components.map(comp=>[comp,m(comp)])  // renderizamos los componentes
                .map(([comp,c],i)=>{
                    /// !!! se crean cada vez los componentes ????
                    return m("div",{
                        style: selectedIndex===i ? "outline: thick solid #00ff00;z-index:10" : "",
                        onclick:()=>{
                            menu=false
                            selectedIndex=selected===c ? undefined : i
                            selected=selected===c ? undefined : c
                            console.log(selected)
                            console.log(selected.state?.model)
                        }}, comp.name)
                })),
                
                selected && selected?.state?.model
                ? m("span",{
                    onclick:()=>dialog=!dialog
                },"Datos")
                : selected 
                ? m("span","NO HAY PARÁMETROS")
                : null
            ),

            selected,

            selected?.state?.model && dialog
            ? m("dialog",{
                oncreate:({dom})=>dom.showModal(),
                oncancel: ()=>dialog=undefined
            },[
                m("h2","Datos"),
                m("h3","ESC para salir"),
                m("pre",JSON.stringify(selected.state.model,null,2))    
            ])
            : null
        ]
    }
}


export {CatalogoComponentes}