import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function LandingAlertDialogSlide() {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const style={color:'black'}

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >

        <DialogContent style={{textAlign:'center'}}>
          <DialogContentText id="alert-dialog-slide-description">
            <h3 style={style}>존재는 알지만 대화해 본 적 없는 우리,</h3>
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            <h3 style={style}> SNS 친구부터 되어 볼까요?</h3>
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{display:"flex", justifyContent:'center'}}>
          <Button onClick={handleClose} color="primary">
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
