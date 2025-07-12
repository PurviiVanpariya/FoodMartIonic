import { useState } from 'react'
import { BsCart3 } from 'react-icons/bs'
import { IonContent, IonSearchbar, IonCol, IonText, IonGrid, IonPage, IonImg } from '@ionic/react'
import CartModal from '../home/CartModal'
import ProductModal from '../home/ProductModal'
import Header from '../../components/header'
import ProductCard from '../../components/home/ProductCards'
const productList = [
    {
        image: "https://askdemo-c24d7.web.app/assets/small/3.jpg",
        title: "Surf Excel Matic Top Load Detergent Powder (Carton)",
        price: 600.99,
        originalPrice: 800.99,
        weight: "2 Kg",
        quantity: 1,
    },
    {
        image: "https://askdemo-c24d7.web.app/assets/small/7.jpg",
        title: "Surf Excel Matic Top Load Detergent Powder (Carton)",
        price: 600.99,
        originalPrice: 800.99,
        discountLabel: "50% OFF",
        DiscountClassName: "bg-green-500 text-[9px] left-2 w-fit",
        weight: "2 Kg",
        quantity: 1,
    },
    {
        image: "https://askdemo-c24d7.web.app/assets/small/1.jpg",
        title: "Surf Excel Matic Top Load Detergent Powder (Carton)",
        price: 600.99,
        originalPrice: 800.99,
        weight: "2 Kg",
        quantity: 1,
    },
    {
        image: "https://askdemo-c24d7.web.app/assets/small/6.jpg",
        title: "Surf Excel Matic Top Load Detergent Powder (Carton)",
        price: 600.99,
        originalPrice: 800.99,
        weight: "2 Kg",
        quantity: 1,
    },
];
const ShopList = ({ showList = false }) => {
    const [searchTerm,] = useState("");
    const [showCart, setShowCart] = useState(false)
    const onCartClick = () => {
        setShowCart(true)
    }
    const [showProductModal, setShowProductModal] = useState(false);
    const onProductModal = () => [
        setShowProductModal(true)
    ]
    return (
        <>
            {
                showList && (
                    <IonPage>
                        <Header
                            cartIcon={BsCart3}
                            Heading='Shop List'
                            onCartClick={onCartClick}
                        />
                        <IonContent className="Modalbg-color ion-padding">
                            <IonSearchbar
                                style={{ "--box-shadow": "transparent", borderRadius: '22px !important' }}
                                className="h-10 !rounded-md !p-0 shadow-md"
                                placeholder="Search.."
                                value={searchTerm}
                                debounce={300}
                            />
                            <IonText className='text-sm flex justify-center my-2'>Placed on Fri, 22 Jun, 8 PM - 11 PM</IonText>
                            <IonImg src="https://askdemo-c24d7.web.app/assets/shop.jpg" alt="slider1" className='rounded-img mb-4' />
                            <IonCol className='!px-0'>
                                <section className='bg-[#F4F5F8] w-full mx-auto'>
                                    <IonGrid className='flex flex-col gap-3 p-0'>
                                        {productList.map((product, index) => (
                                            <ProductCard
                                                key={index}
                                                className="shadow-md flex bg-white"
                                                {...product}
                                                onClick={onProductModal}
                                            />
                                        ))}
                                    </IonGrid>
                                </section>
                            </IonCol>
                        </IonContent>
                        <CartModal showCart={showCart} />
                        <ProductModal showProductModal={showProductModal} />
                    </IonPage>
                )
            }
        </>
    )
}
export default ShopList