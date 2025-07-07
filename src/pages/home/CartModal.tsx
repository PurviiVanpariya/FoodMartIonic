import React, { useState } from 'react'
import ProductCard from '../../components/home/ProductCards'
import { BsArrowRight, BsPersonCircle } from 'react-icons/bs'
import { IonContent, IonSearchbar, IonCol, IonCardContent, IonRow, IonText, IonGrid, IonCard, IonPage } from '@ionic/react'
import { IoMenu } from 'react-icons/io5'
import Header from '../../components/header'
import { AiOutlineShoppingCart } from "react-icons/ai";
import LoginModal from './LoginModal'


const CartModal = ({ showCart = false }) => {

    const [searchTerm,] = useState("");
    
    const [showLogin, setShowLogin] = useState(false);

    const onLoginClick = () => {
        setShowLogin(true);
    };

    return (
        <>
            {
                showCart ? (
                    <IonPage>
                        <Header
                            icon={IoMenu}
                            cartIcon={BsPersonCircle}
                            Heading='Cart'
                            cartClassName='after:hidden'
                        />
                        <IonContent className="Modalbg-color ion-padding">
                            <IonSearchbar
                                style={{ "--box-shadow": "transparent", borderRadius: '22px !important' }}
                                className="h-10 !rounded-md !p-0"
                                placeholder="Search.."
                                value={searchTerm}
                                debounce={300}
                            />
                            <IonCol className='!px-0'>
                                <IonCard className='rounded-xl w-full mx-auto !mt-0'>
                                    <IonCardContent className='space-y-2'>
                                        <IonRow className='justify-between'>
                                            <IonText>M.R.P.</IonText>
                                            <IonText>$233,00</IonText>
                                        </IonRow>
                                        <IonRow className='justify-between'>
                                            <IonText>Products Discount</IonText>
                                            <IonText className='text-green-500'>-$40,00</IonText>
                                        </IonRow>
                                        <IonRow className='justify-between'>
                                            <IonText className='text-blue-500'> Club Member Savings</IonText>
                                            <IonText>-Not a member</IonText>
                                        </IonRow>
                                        <IonRow className='justify-between'>
                                            <IonText>Delivery Charges</IonText>
                                            <IonText className='text-red-500'>+$90,00</IonText>
                                        </IonRow>
                                        <IonRow className='justify-between py-2 border-t border-gray-200'>
                                            <IonText className='text-black font-semibold'>Sub Total</IonText>
                                            <IonText className='text-black font-semibold'>$433,00</IonText>
                                        </IonRow>
                                    </IonCardContent>
                                </IonCard>
                                <section className='space-y-6 bg-[#F4F5F8] w-full mx-auto'>
                                    <IonGrid className='flex flex-col gap-3 p-0'>
                                        <ProductCard className='shadow-md flex bg-white'
                                            image="https://askdemo-c24d7.web.app/assets/small/3.jpg"
                                            title="Surf Excel Matic Top Load Detergent Powder (Carton)"
                                            price={600.99}
                                            originalPrice={800.99}
                                            weight="2 Kg"
                                            quantity={1}
                                        />
                                        <ProductCard className='shadow-md flex bg-white'
                                            image="https://askdemo-c24d7.web.app/assets/small/7.jpg"
                                            title="Surf Excel Matic Top Load Detergent Powder (Carton)"
                                            price={600.99}
                                            originalPrice={800.99}
                                            discountLabel="50% OFF"
                                            DiscountClassName="bg-green-500 text-[9px] left-2 w-fit"
                                            weight="2 Kg"
                                            quantity={1}
                                        />
                                        <ProductCard className='shadow-md flex bg-white'
                                            image="https://askdemo-c24d7.web.app/assets/small/1.jpg"
                                            title="Surf Excel Matic Top Load Detergent Powder (Carton)"
                                            price={600.99}
                                            originalPrice={800.99}
                                            weight="2 Kg"
                                            quantity={1}
                                        />
                                        <ProductCard className='shadow-md flex bg-white'
                                            image="https://askdemo-c24d7.web.app/assets/small/6.jpg"
                                            title="Surf Excel Matic Top Load Detergent Powder (Carton)"
                                            price={600.99}
                                            originalPrice={800.99}
                                            weight="2 Kg"
                                            quantity={1}
                                        />
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
                ) : (
                    <>
                        pppppppppppppppppppppppppppppp
                    </>
                )
            }

            <LoginModal showLogin={showLogin} />
        </>
    )
}

export default CartModal
