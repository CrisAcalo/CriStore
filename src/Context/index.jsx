import React from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const ShoppingCartContext = React.createContext();

const ShoppingCartProvider = ({ children }) => {

    const {
        item: users,
        updateStorageItem: setUsers } = useLocalStorage('users', []);

    const {
        item: auth,
        updateStorageItem: setAuth } = useLocalStorage('auth', {});

    const [globalAlert, setGlobalAlert] = React.useState({ type: '', messages: [], duration: null });

    //Shopping cart - contador del carrito de compra
    const [cartCounter, setCartCounter] = React.useState(0);
    //Shopping cart -Car Status
    const [carProducts, setCarProducts] = React.useState([]);
    //Product car - functions
    const updateCartCounter = () => { setCartCounter(carProducts.length); };

    //Product Detail - estado del detalle del producto (open/closed)
    const [productDetailStatus, setproductDetailStatus] = React.useState(false);
    //Product Detail - producto seleccionado para mostrar detalle
    const [productToShow, setProductToShow] = React.useState({});
    //Product Detail - functions
    const openProductDetail = () => {
        setproductDetailStatus(true);
        checkoutMenuStatus ? closeCheckoutMenu() : null;
    }
    const closeProductDetail = () => { setproductDetailStatus(false); }

    //Checkout - estado del detalle de la orden (open/closed)
    const [checkoutMenuStatus, setCheckoutMenuStatus] = React.useState(false);
    //Checkout - functions
    const openCheckoutMenu = () => {
        setCheckoutMenuStatus(true);
        productDetailStatus ? closeProductDetail() : null;
    }
    const closeCheckoutMenu = () => { setCheckoutMenuStatus(false); }
    const deleteProductFromCart = (id) => {
        setCarProducts(carProducts.filter(product => product.id != id));
    }
    //Checkout - Order
    const [order, setOrder] = React.useState([]);

    //Status to search by title
    const [searchByTitle, setSearchByTitle] = React.useState('');

    //items - de la API
    const [items, setItems] = React.useState(null);
    //items - filtrados por busqueda de titulo
    const [filteredItems, setFilteredItems] = React.useState(null);

    //estado de categoria para filtrar productos en el Home
    const [categoryId, setCategoryId] = React.useState(0);

    //MODAL
    const [openModal, setOpenModal] = React.useState(false);

    React.useEffect(() => {
        try {
            fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${categoryId}`)
                .then((res) => res.json())
                .then((data) => { setItems(data); });
        } catch (error) {
            console.log('Error:', error);
        }
        return () => {
            setSearchByTitle('');
        }
    }, [categoryId]);

    React.useEffect(() => {
        if (items && searchByTitle) {
            const filteredItems = items.filter(
                (item) =>
                    item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
            setFilteredItems(filteredItems);
        } else {
            setFilteredItems(null);
        }
    }, [items, searchByTitle]);

    return (
        <ShoppingCartContext.Provider value={{
            globalAlert,
            setGlobalAlert,
            updateCartCounter,
            cartCounter,
            setCartCounter,
            productDetailStatus,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
            carProducts,
            setCarProducts,
            checkoutMenuStatus,
            setCheckoutMenuStatus,
            openCheckoutMenu,
            closeCheckoutMenu,
            deleteProductFromCart,
            order,
            setOrder,
            searchByTitle,
            setSearchByTitle,
            items,
            setItems,
            filteredItems,
            setFilteredItems,
            categoryId,
            setCategoryId,
            users,
            setUsers,
            auth,
            setAuth,
            openModal,
            setOpenModal
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartProvider, ShoppingCartContext }