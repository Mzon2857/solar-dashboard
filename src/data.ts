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
                title: "Usage",
                url: "/placeholder",
                icon: {placeholder},
            },
            {
                id:2,
                title: "Alerts",
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
                title: "Devices",
                url: "/logs",
                icon: {placeholder},
            },
        ]
    },
]