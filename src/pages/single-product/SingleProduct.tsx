import { IonButton, IonContent, IonIcon, IonImg, IonNote, IonPage, IonRow, IonText } from '@ionic/react'
import { BsArrowRight, BsCart3 } from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ImStarEmpty } from "react-icons/im";
import Header from '../../components/header'
import { PiCheckCircle } from 'react-icons/pi'
import { add, remove } from 'ionicons/icons';
import { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import LoginModal from '../checkout/CheckOut';
import Cart from '../cart/Cart';
import CheckOut from '../checkout/CheckOut';

const SingleProduct = ({ showSingleProduct = false }) => {

    const [showCart, setShowCart] = useState(false)

    const onCartClick = () => {
        setShowCart(true)
    }

    const [showLogin, setShowLogin] = useState(false);

    const onLoginClick = () => {
        setShowLogin(true);
    };

    return (
        <>
            {
                showSingleProduct && (
                    <IonPage className='bg-white h-full overflow-auto'>
                        <Header
                            Heading='Single Product'
                            cartIcon={BsCart3}
                            onCartClick={onCartClick}
                        />
                        <IonContent className='Modalbg-color h-full overflow-auto'>
                            <Swiper className="mySwiper h-96">
                                <SwiperSlide>
                                    <IonImg src="https://askdemo-c24d7.web.app/assets/item/7.jpg" alt="slider1" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <IonImg src="https://askdemo-c24d7.web.app/assets/item/8.jpg" alt="slider2" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <IonImg src="https://askdemo-c24d7.web.app/assets/item/6.jpg" alt="slider2" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <IonImg src="https://askdemo-c24d7.web.app/assets/item/9.jpg" alt="slider2" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <IonImg src="https://askdemo-c24d7.web.app/assets/item/10.jpg" alt="slider2" />
                                </SwiperSlide>
                            </Swiper>
                            <IonRow className='bg-[#F4F5F8] py-6 ion-padding space-y-3 mb-16'>
                                <IonRow className='bg-white shadow-lg rounded-md ion-padding w-full'>
                                    <IonText className='font-semibold max-w-xs text-lg'>Hygienix Anti-Bacterial Hand Sanitizer (Bottle)</IonText>
                                    <IonText className='font-semibold max-w-xs text-sm flex items-center text-primary gap-2 py-1'><PiCheckCircle /> Available in - 500 gm</IonText>
                                    <IonRow className='!w-full flex gap-2 items-center'>
                                        <IonText className='font-semibold text-black'>$456.99 </IonText>
                                        <IonText className='text-primary'>$787.99 </IonText>
                                        <IonText className='bg-green-100 text-green-700 px-2 py-[2px] rounded-md text-xs font-semibold'>5% OFF </IonText>
                                    </IonRow>
                                    <IonRow className='flex justify-between items-center w-full'>
                                        <IonText className='py-2 flex items-center gap-1 text-green-600 text-sm'><ImStarEmpty />4.4</IonText>
                                        <IonNote className='flex items-center gap-2'>
                                            <IonButton size="small" fill="clear" className='plus-btn bg-gray-600 rounded-full text-white !p-0 w-7 h-7'>
                                                <IonIcon icon={remove} />
                                            </IonButton>
                                            <IonText>2</IonText>
                                            <IonButton size="small" fill="clear" className='plus-btn bg-orange-600 rounded-full text-white !p-0 w-7 h-7'>
                                                <IonIcon icon={add} />
                                            </IonButton>
                                        </IonNote>
                                    </IonRow>
                                </IonRow>
                                <IonRow className='bg-white shadow-lg rounded-md ion-padding w-full'>
                                    <IonRow>
                                        <IonRow>
                                            <div className="flex items-center justify-between w-full py-2">
                                                <IonText className="font-bold text-[16px]">Quick Overview</IonText>
                                                <div className="flex items-center justify-between gap-1 text-sm">
                                                    <IonText className="text-primary">Availability:</IonText>
                                                    <span className="bg-green-100 text-green-700 px-2 py-[1px] rounded-md text-[11px] font-semibold">
                                                        In Stock
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="text-sm text-primary space-y-3">
                                                <p className='leading-relaxed'>
                                                    <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</strong> Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum.
                                                </p>
                                                <p className='leading-relaxed'>
                                                    Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hiMenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum.
                                                </p>
                                            </div>
                                        </IonRow>
                                    </IonRow>
                                </IonRow>
                            </IonRow>
                            <IonRow
                                className='fixed bottom-0 bg-[#E76224] w-full left-0 ion-padding justify-between py-3 border-t border-gray-200 cursor-pointer'
                                onClick={onLoginClick}
                            >
                                <IonText className='text-white font-semibold flex items-center gap-1'>
                                    <AiOutlineShoppingCart /> Add to cart
                                </IonText>
                                <IonText className='text-white font-semibold flex items-center gap-1'>
                                    $433,00 <BsArrowRight />
                                </IonText>
                            </IonRow>
                        </IonContent>
                        <Cart showCart={showCart} />
                        <CheckOut showLogin={showLogin} />
                    </IonPage>
                )
            }
        </>
    )
}
export default SingleProduct