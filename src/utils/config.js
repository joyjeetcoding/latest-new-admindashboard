export const usersFormControls = [
    {
        id: "name",
        type: "text",
        placeholder: "Enter your Name",
        label: "Name",
        componentType: "input",
    },
    {
        id: "email",
        type: "email",
        placeholder: "Enter your Email",
        label: "Email",
        componentType: "input",
    },
    {
        id: "status",
        type: "",
        placeholder: "",
        label: "Status",
        componentType: "select",
        options: [
            {
                id: "act",
                label: "Active",
            },
            {
                id: "notact",
                label: "Not Active",
            },
        ]
    },
]