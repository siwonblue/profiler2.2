import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';
import { useRouter } from 'next/router';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const router = useRouter();

  const onAgree = () => {
    router.push('/my');
  };
  const onDisAgree = () => {
    router.push('/');
  };

  return (
    <div>
      <Dialog
        open
        TransitionComponent={Transition}
        keepMounted
        onClose={false}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        {/*<DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>*/}
        <DialogContent style={{ textAlign: 'center' }}>
          <DialogContentText id="alert-dialog-slide-description">SNS 으로 간편하게 로그인하고</DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">프로필을 둘러보세요!</DialogContentText>
        </DialogContent>
        <DialogActions style={{ display: 'flex', justifyContent: 'center' }}>
          <Button onClick={onDisAgree} color="primary">
            뒤로가기
          </Button>
          <Button onClick={onAgree} color="primary">
            로그인하기
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
