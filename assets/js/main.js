
const templatewrap = document.querySelector(".templatewrap")


let templatearr =[
    {
        img:"assets/images/t1 (1).png",
        name:"Blog Wizard",
        dec:"The wizard will guide you to create the best possible blog while respecting SEO",
    },
    {
        img:"assets/images/t1 (2).png",
        name:"Blog Titles",
        dec:"Create the best titles for your blog posts, optimized for SEO",
    },
    {
        img:"assets/images/t1 (1).png",
        name:"Paragraph Writer",
        dec:"You can create all the paragraphs you want, without limit, being sure that they are unique",
    },
    {
        img:"assets/images/t1 (3).png",
        name:"Conclusion Writer",
        dec:"Create summaries, conclusions and final paragraphs for your writing",
    },
    {
        img:"assets/images/t1 (4).png",
        name:"Write Blog Section",
        dec:"If you just want to create a specific paragraph, our generator will do it flawlessly",
    },
    {
        img:"assets/images/t1 (5).png",
        name:"Youtube Video Description",
        dec:"Create the best titles for your blog posts, optimized for SEO",
    },
    {
        img:"assets/images/t1 (6).png",
        name:"Email Subject Line",
        dec:"You can create all the paragraphs you want, without limit, being sure that they are unique",
    },
    {
        img:"assets/images/t1 (7).png",
        name:"Seo Keyword",
        dec:"Create summaries, conclusions and final paragraphs for your writing",
    },

]


templatewrap.innerHTML=templatearr.map((item) =>{
    return`
      <div class="singletemplate">
                <div class="templateimgtext">
                    <img src="${item.img}" alt="">
                    <h4>${item.name}</h4>
                </div>
                <p>${item.dec}</p>
            </div>
    `
}).join("")