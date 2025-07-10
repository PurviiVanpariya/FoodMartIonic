import { IonButton, IonCol, IonContent, IonIcon, IonImg, IonNote, IonPage, IonRow, IonText } from '@ionic/react'
import { IoMenu } from 'react-icons/io5'
import { BsCart3 } from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ImStarEmpty } from "react-icons/im";
import Header from '../../components/header'
import { PiCheckCircle } from 'react-icons/pi'
import { add, remove } from 'ionicons/icons';
const ProductModal = ({ showProductModal = false }) => {
    return (
        <>
            {
                showProductModal ? (
                    <IonPage className='bg-white h-full overflow-auto'>
                        <Header
                            icon={IoMenu}
                            Heading='Single Product'
                            cartIcon={BsCart3}
                        />
                        <IonContent className='!bg-[#F4F5F8] h-full overflow-auto'>
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
                            <IonRow className='bg-[#F4F5F8] py-6 ion-padding space-y-3'>
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
                        </IonContent>
                    </IonPage>
                ) : (
                    <>no modal</>
                )
            }
        </>
    )
}
export default ProductModal