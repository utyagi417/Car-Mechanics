import { create } from 'zustand'

const useStore = create((set) => ({

    cart : JSON.parse(sessionStorage.getItem("SecureStorage_v2_srr8i9rto34zx_User_Cart")) || [],
    updateCart : (cart) => {
        set({cart});
        sessionStorage.setItem("SecureStorage_v2_srr8i9rto34zx_User_Cart",JSON.stringify(cart));
    }


}));


export default useStore;
