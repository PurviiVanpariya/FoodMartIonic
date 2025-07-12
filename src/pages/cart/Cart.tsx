import { useState } from 'react'
import ProductCard from '../../components/home/ProductCards'
import { BsArrowRight, BsPersonCircle } from 'react-icons/bs'
import { IonContent, IonCol, IonCardContent, IonRow, IonText, IonGrid, IonCard, IonPage } from '@ionic/react'
import Header from '../../components/header'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { PiCardsThree } from 'react-icons/pi'
import { FaRegCircleQuestion } from "react-icons/fa6";
import SingleProduct from '../single-product/SingleProduct'
import CheckOut from '../checkout/CheckOut'
import MyProfile from '../my-profile/MyProfile'

const products = [
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

const Cart = ({ showCart = false }) => {

    const [searchTerm,] = useState("");

    const [showLogin, setShowLogin] = useState(false);
    const [showMyProfile, setShowMyProfile] = useState(false);

    const onLoginClick = () => {
        setShowLogin(true);
    };
    const onProfileClick = () => {
        setShowMyProfile(true);
    };

    const [showSingleProduct, setShowSingleProduct] = useState(false);

    const onProductModal = () => [
        setShowSingleProduct(true)
    ]

    return (
        <>
            {
                showCart && (
                    <IonPage>
                        <Header
                            cartIcon={BsPersonCircle}
                            onCartClick={onProfileClick}
                            Heading='Cart'
                            cartClassName='after:hidden'
                        />
                        <IonContent className="Modalbg-color ion-padding">
                            <IonCol className='!px-0'>
                                <IonCard className='rounded-xl w-full mx-auto !mt-0 !mb-4 text-primary'>
                                    <IonCardContent className='space-y-2'>
                                        <IonRow className='justify-between'>
                                            <IonText>M.R.P.</IonText>
                                            <IonText>$233,00</IonText>
                                        </IonRow>
                                        <IonRow className='justify-between'>
                                            <IonText>Products Discount</IonText>
                                            <IonText className='text-[#28a745]'>-$40,00</IonText>
                                        </IonRow>
                                        <IonRow className='justify-between'>
                                            <IonText className='text-[#17a2b8] flex gap-1 items-center'><PiCardsThree /> Club Member Savings</IonText>
                                            <IonText>Not a member</IonText>
                                        </IonRow>
                                        <IonRow className='justify-between'>
                                            <IonText className='flex items-start gap-1'>Delivery Charges <FaRegCircleQuestion className='text-[#dc3545] !w-[11px] !h-[11px]' /></IonText>
                                            <IonText className='text-[#dc3545]'>+$90,00</IonText>
                                        </IonRow>
                                        <IonRow className='justify-between py-2 border-t border-gray-200'>
                                            <IonText className='text-black font-semibold'>Sub Total</IonText>
                                            <IonText className='text-black font-semibold'>$433,00</IonText>
                                        </IonRow>
                                    </IonCardContent>
                                </IonCard>
                                <IonRow className='mb-16 bg-[#F4F5F8] w-full mx-auto'>
                                    <IonGrid className='flex flex-col gap-3 p-0'>
                                        {products.map((product, index) => (
                                            <ProductCard
                                                key={index}
                                                className="shadow-md flex bg-white"
                                                {...product}
                                                onClick={onProductModal}
                                            />
                                        ))}
                                    </IonGrid>
                                </IonRow>
                            </IonCol>
                            <IonRow
                                className='fixed bottom-0 bg-[#E76224] w-full left-0 ion-padding justify-between py-3 border-t border-gray-200 cursor-pointer'
                                onClick={onLoginClick}
                            >
                                <IonText className='text-white font-semibold flex items-center gap-1'>
                                    <AiOutlineShoppingCart /> Proceed to Checkout
                                </IonText>
                                <IonText className='text-white font-semibold flex items-center gap-1'>
                                    $433,00 <BsArrowRight />
                                </IonText>
                            </IonRow>
                        </IonContent>
                        <CheckOut showLogin={showLogin} />
                        <SingleProduct showSingleProduct={showSingleProduct} />
                        <MyProfile showMyProfile={showMyProfile} />
                    </IonPage>
                )
            }
        </>
    )
}

export default Cart
