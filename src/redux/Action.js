

export const addnew=(titre,lesson,nstud,nrat,img,url)=>({
type:"addnew",
payload:{
    id:Math.random(),
    title:titre,
    lesson:lesson,
    students:nstud ,
    rating:nrat ,
    source:"free",
    imgurl: img,
    URL:url

}

})