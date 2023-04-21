import { DialogTitle, Dialog } from "@mui/material";

function CoinDetail({ open, onClose }) {
  const handleClose = () => {
    onClose();
  };
  return (
    <>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Set backup account</DialogTitle>
      </Dialog>
    </>
  );
}

export default CoinDetail;
