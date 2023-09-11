// 'use client';

// import { Box, Button, Modal, Typography } from '@mui/material';
// import React, { createContext, useReducer, useState } from 'react';

// interface ModalContent {
//   title?: string;
//   description?: string;
//   confirmButton?: string;
//   cancelButton?: string;
//   confirmCallback?: () => void;
//   cancelCallback?: () => void;
//   useConfirmButton?: boolean;
//   useCancelButton?: boolean;
// }

// interface Modal extends ModalContent {
//   show: boolean;
// }

// // Default Value
// export const ModalContext = createContext<any>({});

// const initialState = {
//   show: false,
// }

// interface ModalProviderProps {
//   children: React.ReactNode;
// }

// export default function ModalProvider({ children }: ModalProviderProps) {

//   function reducer(state: any, action: any) {
//     switch (action.type) {
//       case "SHOW_MODAL":
//         return { };
//       case "HIDE_MODAL":
//         return { };
//       default:
//         throw new Error("unsupported action type: ", action.type);
//     }
//   }

//   const [state, dispatch] = useReducer(reducer, initialState)

//   return (
//     // Initial Value
//     <ModalContext.Provider
//       value={{state, dispatch}}
//     >
//       {children}
//       <Modal
//         open={state}
//         onClose={() => setModal({ show: false })}
//         sx={{
//           position: 'fixed',
//           top: '50px',
//           left: '50px',
//           width: '300px',
//           minHeight: '100px',
//           backgroundColor: 'white',
//         }}
//       >
//         <Box>
//           <Typography variant="h6" component="h2">
//             {modal.title}
//           </Typography>
//           <Typography sx={{ mt: 2 }}>{modal.description}</Typography>
//           <div style={{ display: 'flex', flexDirection: 'row', gap: '4px' }}>
//             {modal.useConfirmButton ? (
//               <Button
//                 variant="contained"
//                 onClick={() => {
//                   modal.confirmCallback && modal.confirmCallback();
//                 }}
//               >
//                 {modal.confirmButton ?? '확인'}
//               </Button>
//             ) : (
//               <></>
//             )}
//             {modal.useCancelButton ? (
//               <Button
//                 variant="contained"
//                 onClick={() => {
//                   modal.cancelCallback && modal.cancelCallback();
//                   setModal({ show: false });
//                 }}
//               >
//                 {modal.cancelButton ?? '취소'}
//               </Button>
//             ) : (
//               <></>
//             )}
//           </div>
//         </Box>
//       </Modal>
//     </ModalContext.Provider>
//   );
// }

'use client';

import { createContext, useReducer } from 'react';
import CustomModal from './CustomModal';

export const ModalContext = createContext<any>({});

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

const initialState = { show: false };

export default function ModalProvider({ children }: any) {
  const reducer = (state: Modal, action: any) => {
    switch (action.type) {
      case 'OPEN_MODAL':
        return {
          ...state,
          show: true,
          title: action.payload.title,
          description: action.payload.description,
          useCancelButton: false,
          useConfirmButton: true,
          confirmCallback: () => {
            {
              dispatch({ type: 'CLOSE_MODAL' });
            }
          },
        };
      case 'CLOSE_MODAL':
        return { show: false };

      default:
        throw new Error("Doesn't have action type");
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    // Initial Value
    <ModalContext.Provider value={{ state, dispatch }}>
      {children}
      {state.show && <CustomModal />}
    </ModalContext.Provider>
  );
}
