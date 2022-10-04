import { atom } from 'recoil';

const productDialogAtom = atom({
    key: 'productDialog',
    default: false
});

export { 
    productDialogAtom,
};