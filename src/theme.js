import { createTheme } from "@mui/material";


export const theme = createTheme({
    default: {
        body: {
            margin: '0',
            padding: '0',
            boxSizing: 'border-box',
        }
    },
    palette:{
        primary: {
            main:"#1760a5",
            light: "skyblue"
        },
        secondary: {
            main:"#15c630"
        },
        otherColor: {
            main: "#999"
        }
    },
    shape: {
        borderRadius: '5px',
    }
})