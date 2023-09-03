/* eslint-disable no-unused-expressions */

'use client';

import { Box, Button, Modal, Typography } from '@mui/material';
import React, { createContext, useState } from 'react';

interface ModalContent {
  title?: string;
  description?: string;
  confirmButton?: string;
  cancelButton?: string;
  confirmCallback?: () => void;
  cancelCallback?: () => void;
  useConfirmButton?: boolean;
  useCancelButton?: boolean;
}

interface Modal extends ModalContent {
  show: boolean;
}

// Default Value
export const ModalContext = createContext({
  show: (param: ModalContent) => {},
  hide: () => {},
});

interface ModalProviderProps {
  children: React.ReactNode;
}

export default function ModalProvider({ children }: ModalProviderProps) {
  const [modal, setModal] = useState<Modal>({
    show: false,
  });

  return (
    // Initial Value
    <ModalContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        show: (param: ModalContent) => {
          setModal({
            show: true,
            title: param.title,
            description: param.description,
            confirmButton: param.confirmButton,
            cancelButton: param.cancelButton,
            confirmCallback: param.confirmCallback,
            cancelCallback: param.cancelCallback,
            useConfirmButton: param.useConfirmButton ?? true, // ?? - 앞의 값이 undefined 또는 null이면 우항, 아니면 좌항 반환
            useCancelButton: param.useCancelButton ?? true,
          });
        },
        hide: () => {
          setModal({ show: false });
        },
      }}
    >
      {children}
      <Modal
        open={modal.show}
        onClose={() => setModal({ show: false })}
        sx={{
          position: 'fixed',
          top: '50px',
          left: '50px',
          width: '300px',
          minHeight: '100px',
          backgroundColor: 'white',
        }}
      >
        <Box>
          <Typography variant="h6" component="h2">
            {modal.title}
          </Typography>
          <Typography sx={{ mt: 2 }}>{modal.description}</Typography>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '4px' }}>
            {modal.useConfirmButton ? (
              <Button
                variant="contained"
                onClick={() => {
                  modal.confirmCallback && modal.confirmCallback();
                }}
              >
                {modal.confirmButton ?? '확인'}
              </Button>
            ) : (
              <></>
            )}
            {modal.useCancelButton ? (
              <Button
                variant="contained"
                onClick={() => {
                  modal.cancelCallback && modal.cancelCallback();
                  setModal({ show: false });
                }}
              >
                {modal.cancelButton ?? '취소'}
              </Button>
            ) : (
              <></>
            )}
          </div>
        </Box>
      </Modal>
    </ModalContext.Provider>
  );
}
