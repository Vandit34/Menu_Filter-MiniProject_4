const content =[
    {
        id:"op_1",
        img:"Menu_Filter_img_1_1.jpg"
    }
    ,
    {
        id:"op_1",
        img:"Menu_Filter_img_1_1.jpg"
    }
    ,
    {
        id:"op_1",
        img:"Menu_Filter_img_1_1.jpg"
    }
    ,
    {
        id:"op_1",
        img:"Menu_Filter_img_1_1.jpg"
    }
    ,
    {
        id:"op_2",
        img:"Menu_Filter_img_2_1.jpg"
    }
    ,
    {
        id:"op_3",
        img:"Menu_Filter_img_3_1.jpg"
    },
    {
        id:"op_2",
        img:"Menu_Filter_img_2_1.jpg"
    }
    ,
    {
        id:"op_2",
        img:"Menu_Filter_img_2_1.jpg"
    }
    ,
   
    
    {
        id:"op_3",
        img:"Menu_Filter_img_3_1.jpg"
    },
    {
        id:"op_3",
        img:"Menu_Filter_img_3_1.jpg"
    },
    {
        id:"op_3",
        img:"Menu_Filter_img_3_1.jpg"
    },
    {
        id:"op_3",
        img:"Menu_Filter_img_3_1.jpg"
    },
    
]


const options = document.querySelectorAll(".option");
const grid= document.getElementById("grid");


options.forEach((option)=>{
// ----------------------------
if(option.classList.contains("click"))
{

    const w=option.dataset.id;
// ⭐"content" is filtered out and then it's "data-id" is compared with "w" [it has the data-id of "option" which has "click" in the classList]    
    const option_type=content.filter((x)=>{
        if(x.id==w)
        {
            return x;
        }
    })
    grid_content(option_type);

}

// ---------------------------------
    option.addEventListener("click",(op)=>{
        let x=op.target;    
       let y=op.target.dataset.id;
      
        if(!x.classList.contains("click"))
        {
            options.forEach((option)=>{
                option.classList.remove("click");
            })
         
            x.classList.add("click");
        } 

    // ⭐"content" is filtered out and then it's "data-id" is compared with "y" [it has the data-id of clicked option] 
        
    const option_type=content.filter((x)=>{
            if(x.id==y)
            {
                return x;
            }
        })
     
        grid_content(option_type);
    })
})
function grid_content(type)
{
    const display_content=type.map((e)=>{
        return ` <div class="grid_option" data-id="${e.id}"><img src="./Content/${e.img}" alt=""></div>`
    })
grid.innerHTML=display_content.join("");
}

