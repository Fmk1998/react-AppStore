import React, {FunctionComponent} from "react";
import {connect} from "react-redux";
import {withRouter, RouteComponentProps} from "react-router-dom";
// import Api from '../../config/api.config'
import "./index.scss";
import {Box, Button, ButtonBase, createStyles, Grid, Paper, Theme, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {CopyToClipboard} from "para-lib";
import iconUrl from '../../assets/logo.png'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(2),
            margin:0,
            width: '90%',
        },
        image: {
            width: 128,
            height: 128,
        },
        img: {
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
        },
        paper2: {
            padding: theme.spacing(2),
            margin: '10 0 0 0',
            width: '90%',
        },
        image2: {
            width: 300,
            height: 300,
        },
        img2: {
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
        },
    }),
);

interface OwnProps extends RouteComponentProps {
    appList:[],
    currentMenu: string,
    currentKeyOfDetail:number
}

type Props = OwnProps;

interface State {
    menu?: {
        currentMenu?: string
    }
    app?:{
        appList?: [],
        currentMenu?: string,
        currentKeyOfDetail?: number
    }
}

const mapStateToProps = (state: State) => {
    return {
        appList :state.app?.appList || [],
        currentMenu: state.app?.currentMenu,
        currentKeyOfDetail: state.app?.currentKeyOfDetail || null,
    };
};

const Detail: FunctionComponent<Props> = (props) => {
    const classes = useStyles();

    const copyUrl = (url:any) => () => {
        CopyToClipboard(url);
        debugger
    }

    return (
        /*<div className="common-iframe">
            {props.appList.map((value: any) => (
                value.url ===props.currentMenu && value.children
                    ? value.children.map((item: any) => (
                        item.key === props.currentKeyOfDetail ?
                            <div key={item.key}>
                                <Paper className={classes.paper}>
                                    <Grid container spacing={2}>
                                        <Grid item>
                                            <ButtonBase className={classes.image}>
                                                <img className={classes.img} alt="complex" src={item.iconUrl} />
                                            </ButtonBase>
                                        </Grid>
                                        <Grid item xs={12} sm container>
                                            <Grid item xs container direction="column" spacing={2}>
                                                <Grid item xs>
                                                    <Typography gutterBottom variant="subtitle1">
                                                        {item.name}
                                                    </Typography>
                                                    <Typography variant="body2" gutterBottom>
                                                        {item.detail}
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary">
                                                        {item.description}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="subtitle1">
                                                    <Button variant="contained" color="primary" className="button" onClick={(item:any)=>copyUrl(item)}>
                                                        获取Url
                                                    </Button>
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Paper>
                                <Paper className={classes.paper2}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={4}>
                                            <ButtonBase className={classes.image2}>
                                                <img className={classes.img2} alt="complex" src={item.iconUrl} />
                                            </ButtonBase>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <ButtonBase className={classes.image2}>
                                                <img className={classes.img2} alt="complex" src={item.iconUrl} />
                                            </ButtonBase>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <ButtonBase className={classes.image2}>
                                                <img className={classes.img2} alt="complex" src={item.iconUrl} />
                                            </ButtonBase>
                                        </Grid>
                                    </Grid>
                                </Paper>
                                <Paper className={classes.paper2}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <Typography variant="h1" component="h2">
                                                这是md文档
                                            </Typography>
                                            <Typography variant="h1" component="h2">
                                                这是md文档
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </div>
                         :null))
                    : <span>无效id</span>
            ))}
        </div>*/
        <div className="common-iframe">
            {props.appList.map((item: any) => (
                item.id === props.currentKeyOfDetail ?
                    <div key={item.id}>
                        <Paper className={classes.paper}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                        <img className={classes.img} alt="complex" src={iconUrl} />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1">
                                                {item.name}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                {item.dirName}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                {item.description}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1">
                                            <Button variant="contained" color="primary" className="button" onClick={copyUrl(item.jar)}>
                                                获取Url
                                            </Button>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Paper className={classes.paper2}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={4}>
                                            <ButtonBase className={classes.image2}>
                                                <img className={classes.img2} alt="complex" src={iconUrl} />
                                            </ButtonBase>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <ButtonBase className={classes.image2}>
                                                <img className={classes.img2} alt="complex" src={iconUrl} />
                                            </ButtonBase>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <ButtonBase className={classes.image2}>
                                                <img className={classes.img2} alt="complex" src={iconUrl} />
                                            </ButtonBase>
                                        </Grid>
                                    </Grid>
                        </Paper>
                        <Paper className={classes.paper2}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <Typography variant="h1" component="h2">
                                                这是md文档
                                            </Typography>
                                            <Typography variant="h1" component="h2">
                                                这是md文档
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                    </div>
                    :null
            ))}
        </div>
    );
};

export default withRouter(connect(mapStateToProps, null)(Detail));
