import React, { useState } from 'react'
import ProductCard from '../../components/home/ProductCards'
import { BsArrowRight, BsCart3, BsPersonCircle } from 'react-icons/bs'
import { IonContent, IonSearchbar, IonCol, IonCardContent, IonRow, IonText, IonGrid, IonCard, IonPage, IonImg } from '@ionic/react'
import { IoMenu } from 'react-icons/io5'
import Header from '../../components/header'
import { AiOutlineShoppingCart } from "react-icons/ai";
import LoginModal from './LoginModal'
import { PiCardsThree } from 'react-icons/pi'
import { FaRegCircleQuestion } from "react-icons/fa6";
import ProductModal from './ProductModal'

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


const ListModal = ({ showList = false }) => {

    const [searchTerm,] = useState("");

    const [showLogin, setShowLogin] = useState(false);

    const onLoginClick = () => {
        setShowLogin(true);
    };


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
                            icon={IoMenu}
                            cartIcon={BsCart3}
                            Heading='Shop List'
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
                                <section className='mb-16 bg-[#F4F5F8] w-full mx-auto'>
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
                    </IonPage>
                )
            }

            <LoginModal showLogin={showLogin} />
             <ProductModal showProductModal={showProductModal} />
        </>
    )
}

export default ListModal
