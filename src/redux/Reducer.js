import mehdi1 from "../Assests/Images/ui.png"
const initialstate={
    cours:[
        {   id: Math.random(),
            title: "Web Design BootCamp-2022 for Beginners",
            lesson: 1,
            students: 50,
            rating: 5.9,
            source:3,
            imgUrl: mehdi1,
            URL:''
        },
        {   id: Math.random(),
            title: "Web Design BootCamp-2022 for Beginners",
            lesson: 2,
            students: 2,
            rating: 2,
            source:2,
            imgUrl: 2,
            URL:2
        },

        {   id: Math.random(),
            title: "Web Design BootCamp-2022 for Beginners",
            lesson: 3,
            students: 3,
            rating: 3,
            source:3,
            imgUrl: "Assests/Images/graphics-design.png",
            URL:3,
        },

        {   id: Math.random(),
            title: "Web Design BootCamp-2022 for Beginners",
            lesson: 12,
            students: 12.5,
            rating: 5.9,
            source:7,
            imgUrl: "https://aymeric-auberton.fr/img/cours/cours-css-max.jpg",
            URL:7
        },

        {   id: Math.random(),
            title: "Web Design BootCamp-2022 for Beginners",
            lesson: 12,
            students: 12.5,
            rating: 5.9,
            source:8,
            imgUrl: 8,
            URL:8,
        },

        {   id: Math.random(),
            title: "Web Design BootCamp-2022 for Beginners",
            lesson: 12,
            students: 12.5,
            rating: 5.9,
            source:9,
            imgUrl: 9,
            URL:9
        }
    ]
}

const Reducer =(state=initialstate,{type,payload})=>{
    switch(type){
        case "addnew":
            return{
               cours:[...state.cours,payload] 
            }
            default:  
    return state;
    }
    
}
export default Reducer