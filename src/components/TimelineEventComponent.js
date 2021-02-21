// Import React
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Scrollbars from "react-custom-scrollbars";
import { InputBase } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    eventContainer: {
        position: "absolute",
        left: 0,
        bottom: 45, // This value should be such that the event box touches the timeline bar on the bottom, so adjust accordingly
        minWidth: 290, // At least 300px adding in padding
        width: "20%",
        minHeight: 190, // At least 200px adding in padding
        height: "30%",
        zIndex: 1,
        backgroundColor: theme.palette.background.default,
        display: "flex",
        flexFlow: "column",
        alignItems: "stretch",
        padding: 5,
    },
    eventBar: {
        backgroundColor: theme.palette.background.default,
        display: "flex",
        height: 50,
        flexFlow: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    eventContent: {
        marginTop: 5,
        flexGrow: 1,
        resize: "none",
    },
    eventButton: {
        fontSize: 10,
        width: 50,
        margin: 3,
    },
    dateInput: {
        margin: 10,
    }
}));

export default function TimelineEventComponent(props) {
    const classes = useStyles();
    return (
        <div className={classes.eventContainer}>
            <div className={classes.eventBar}>
                <TextField size="small" label="Date" margin="dense" value={props.date} onChange={e => {props.updateEventDate(e.target.value)}} className={classes.dateInput}></TextField>
                <Button variant="contained" size="small" color="primary" onClick={() => {props.clearEntry();}} className={classes.eventButton}>Clear Entry</Button>
                <Button variant="contained" size="small" color="secondary" onClick={() => {props.deleteEntry(props.activeEntry);}} disabled={props.activeEntry===0} className={classes.eventButton}>Delete Entry</Button>
                {/*Delete button is disabled for the first entry TODO: because for now we haven't implemented the add entry before first element functionality yet, nor is there a button for it*/}
            </div>
            <textarea className={classes.eventContent} value={props.event} onChange={e => {props.updateEvent(e.target.value)}} multiline="true"></textarea>
        </div>
    );
}