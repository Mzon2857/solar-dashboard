import placeholder from "./assets/TheHomeDepot.svg"
export const menu = [
    {
        id:1,
        title: "main",
        listItems:[
            {
                id:1,
                title: "Dashboard",
                url: "/",
                icon: {placeholder},
            },
            {
                id:2,
                title: "Profile",
                url: "/users",
                icon: {placeholder},
            },
        ]
    },
    {
        id:2,
        title: "misc",
        listItems:[
            {
                id:1,
                title: "p1",
                url: "/placeholder",
                icon: {placeholder},
            },
            {
                id:2,
                title: "p2",
                url: "/placeholder",
                icon: {placeholder},
            },
        ]
    },
    {
        id:3,
        title: "maintenance",
        listItems:[
            {
                id:1,
                title: "Settings",
                url: "/placeholder",
                icon: {placeholder},
            },
            {
                id:2,
                title: "Logs",
                url: "/placeholder",
                icon: {placeholder},
            },
        ]
    },
]