import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import DialogContent from "@material-ui/core/DialogContent";

interface ModalProps {
  title?: string;
  children: React.ReactNode;
  visible?: boolean;
  onClose: () => void;
}

const ModalBlock: React.FC<ModalProps> = ({
  title,
  children,
  visible = false,
  onClose,
}): React.ReactElement | null => {
  if (!visible) {
    return null;
  }

  return (
    <Dialog open={visible} onClose={onClose}>
      <DialogTitle id="form-dialog-title">
        <IconButton onClick={onClose}>
          <CloseIcon style={{ fontSize: 26 }} />
        </IconButton>
        {title}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default ModalBlock;
