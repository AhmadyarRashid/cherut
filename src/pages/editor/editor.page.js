import React, {Component} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Button, GridList, GridListTile} from '@material-ui/core';
import PhotoFilterIcon from '@material-ui/icons/PhotoFilter';
import Header from './Header';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    sideMenu: {
        padding: 12
    },
    gridList: {
        width: '100%',
        height: '100%',
    },
    icon: {
        width: 50,
        height: 50
    },
    card: {
        margin: 25,
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#f1acac',
        width: '80%',
        height: '80%',
        boxShadow: '10px 20px 30px #c49d9d'
    },
    cardImage: {
        position: 'relative',
        right: 0,
        top: 0
    }
}));

function Editor(props) {
    const classes = useStyles();

    const [edit, setEdit] = React.useState(false);
    const [text, setText] = React.useState('');

    const handlerKeyCode = e => {
        if (e.keyCode == 32) {
            setEdit(false)
        }
    }

    const handlerInput = e => {
        setText(e.target.value);
    };

    return (
        <div className={classes.root}>
            <Header/>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={3} md={1}>
                    <Paper className={classes.paper}>
                        <div style={{flexDirection: 'column'}}>
                            <div className={classes.sideMenu}><PhotoFilterIcon className={classes.icon}/>Fhotos</div>
                            <div className={classes.sideMenu}><PhotoFilterIcon className={classes.icon}/>Tema</div>
                            <div className={classes.sideMenu}><PhotoFilterIcon className={classes.icon}/>Modelo</div>
                            <div className={classes.sideMenu}><PhotoFilterIcon className={classes.icon}/>Tamanho</div>
                            <div className={classes.sideMenu}><PhotoFilterIcon className={classes.icon}/>Texto</div>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={3} md={3}>
                    <Paper className={classes.paper}>
                        <div>
                            <div>
                                <Button
                                    style={{
                                        width: '100%',
                                        padding: 12,
                                        backgroundColor: '#00bfff',
                                        color: 'white'
                                    }}>
                                    + AdICIONAR FOTOS</Button></div>
                            <div style={{marginTop: 18}}>
                                <GridList cellHeight={160} className={classes.gridList} cols={4}>
                                    <GridListTile key={'123'} cols={2} style={{padding: 12}}>
                                        <img src={require('../../assets/image/1.PNG')} style={{width: 100, height: 100}}
                                             alt={'image'}/>
                                    </GridListTile>
                                    <GridListTile key={'123'} cols={2} style={{padding: 12}}>
                                        <img src={require('../../assets/image/2.PNG')}
                                             style={{width: 100, height: 100}}
                                             alt={'image'}/>
                                    </GridListTile>
                                    <GridListTile key={'123'} cols={2} style={{padding: 12}}>
                                        <img src={require('../../assets/image/3.PNG')}
                                             style={{width: 100, height: 100}}
                                             alt={'image'}/>
                                    </GridListTile>
                                </GridList>
                            </div>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={3} md={8}>
                    <div className={classes.card}>
                        <Grid container spacing={3} style={{height: '70%'}}>
                            <Grid item md={6}>
                                <Paper style={{height: '50%'}} className={classes.paper}>
                                    <img className={classes.cardImage} src={require('../../assets/image/1.PNG')}/>
                                </Paper>
                                <Paper style={{marginTop: 8, height: '50%'}} className={classes.paper}>
                                    <img className={classes.cardImage} src={require('../../assets/image/3.PNG')}/>
                                </Paper>
                            </Grid>
                            <Grid item md={6}>
                                <Paper style={{height: '112%'}} className={classes.paper}>
                                    <img className={classes.cardImage} src={require('../../assets/image/2.PNG')}/>
                                </Paper>
                            </Grid>
                        </Grid>
                        <div style={{marginTop: 95, padding: 3}}>
                            {!edit ?
                                <p ondblclick={e => setEdit(true)}
                                   style={{textAlign: 'center', color: 'white', fontSize: 22}}>{!!text ? text: 'Write Here Text'}</p> :
                                <input onKeyUp={e => handlerKeyCode(e)} onChange={e => handlerInput(e)} value={text}
                                       style={{
                                           textAlign: 'center',
                                           color: 'black',
                                           backgroundColor: 'white',
                                           fontSize: 22,
                                           width: '100%',
                                           height: 55
                                       }}/>}
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Editor;
