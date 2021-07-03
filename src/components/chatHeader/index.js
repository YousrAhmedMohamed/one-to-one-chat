import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';



const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        marginInlineEnd: 20
    },
}))

export default function ChatHeader({ avatar1 }) {
    const classes = useStyles();
    return (
        <div className="header-back">
            <Avatar src={avatar1} className={classes.large} />
            <label>user one</label>
        </div>
    )
}