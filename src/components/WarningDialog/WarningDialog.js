import React, {useEffect, useState} from "react";
import {withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';


function PaperComponent(props) {
    return (
      <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );
  }

const warningDialog = (props) => {
    const {open, handleLogin, handleCancel} = props;
    const [show, setShow] = useState(open);

    useEffect(() => {
        setShow(open)
    },[open])
    
     
    return (
        <Dialog
        open={show}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Üye Ol veya GİRİŞ Yap
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Randevu almak için önce giriş yapmalısınız.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCancel} color="primary">
            Vazgeç
          </Button>
          <Button onClick={handleLogin} color="primary">
            Giriş Yap
          </Button>
        </DialogActions>
      </Dialog>
    )

}

export default withRouter(warningDialog);