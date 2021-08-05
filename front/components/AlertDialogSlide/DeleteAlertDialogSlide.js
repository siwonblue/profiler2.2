import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';
import { btnStyle } from '../WithDrawalDrawerContent/styles';
import { Col, Row } from 'antd';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DeleteAlertDialogSlide({ onAction, test, action, showSlideOut }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={showSlideOut}
        TransitionComponent={Transition}
        keepMounted
        onClose={test}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent style={{ textAlign: 'center' }}>
          <DialogContentText id="alert-dialog-slide-description">모든 정보는 삭제 됩니다.</DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">진행 하시겠습니까?</DialogContentText>
        </DialogContent>
        <DialogActions style={{ display: 'flex', justifyContent: 'center' }}>
          <Button style={btnStyle} onClick={test} color="primary">
            {action} 취소
          </Button>

          <Button style={btnStyle} onClick={onAction} color="primary">
            {action}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

DeleteAlertDialogSlide.prototype = {
  onAction: PropTypes.func.isRequired,
  test: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired,
  showSlideOut: PropTypes.bool.isRequired,
};
