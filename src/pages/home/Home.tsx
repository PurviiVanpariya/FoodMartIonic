import { IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonImg, IonModal, IonPage, IonRefresher, IonRefresherContent, IonRow, IonSearchbar, IonText, IonTitle, RefresherEventDetail } from '@ionic/react';
import { IoMenu } from 'react-icons/io5';
import { BsCart3, BsPersonCircle } from "react-icons/bs";

import Header from '../../components/header';
import ProductCard from '../../components/home/ProductCards';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import './Home.css';
import { useRef, useState } from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa6";

import { OverlayEventDetail } from '@ionic/react/dist/types/components/react-component-lib/interfaces';
import LoginModal from './LoginModal';

const Home: React.FC = () => {
  const [searchTerm,] = useState("");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  
  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };
  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  // Cart modal
  const cartModal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);
  const proceedModal = useRef<HTMLIonModalElement>(null);

  const [message, setMessage] = useState(
    'This modal example uses triggers to automatically open a modal when the button is clicked.'
  );

  function confirm() {
    cartModal.current?.dismiss(input.current?.value, 'confirm');
  }

  function onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
    if (event.detail.role === 'confirm') {
      setMessage(`Hello, ${event.detail.data}!`);
    }
  }

  function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
    setTimeout(() => {
      // Any calls to load data go here
      event.detail.complete();
    }, 2000);
  }

  return (
    <IonPage>
      <Header
        icon={IoMenu}
        cartIcon={BsCart3}
        SubHeading='Delivery Location'
        Heading='Bengaluru, India'
        searchbar={true}
      />
      <IonContent fullscreen>
        <IonRefresher slot="fixed" pullFactor={0.5} pullMin={100} pullMax={200} onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <Swiper className="mySwiper">
          <SwiperSlide>
            <IonImg src="/images/home/slider1.jpg" alt="slider1" />
          </SwiperSlide>
          <SwiperSlide>
            <IonImg src="/images/home/slider1.jpg" alt="slider1" />
          </SwiperSlide>
          <SwiperSlide>
            <IonImg src="/images/home/slider1.jpg" alt="slider1" />
          </SwiperSlide>
          <SwiperSlide>
            <IonImg src="/images/home/slider1.jpg" alt="slider1" />
          </SwiperSlide>
          <SwiperSlide>
            <IonImg src="/images/home/slider1.jpg" alt="slider1" />
          </SwiperSlide>
        </Swiper>

        <IonGrid className='flex justify-between py-3 px-2'>
          <IonImg src="/images/home/discount.jpg" alt="discount1" className='w-[49%] rounded-md' />
          <IonImg src="/images/home/discount2.jpg" alt="discount2" className='w-[49%] rounded-md' />
        </IonGrid>

        <section className='bg-[#e3641d] p-3'>
          <IonRow className='flex flex-col gap-2'>
            <IonText className='text-white mx-auto text-lg font-semibold'>
              Best of Everyday essentials
            </IonText>
            <IonText className='text-white/70 mx-auto text-base'>
              View All
            </IonText>
          </IonRow>

          <IonGrid className='!px-0 grid grid-cols-2 justify-between gap-x-3 gap-y-4'>
            <ProductCard
              image="https://askdemo-c24d7.web.app/assets/small/3.jpg"
              title="Surf Excel Matic Top Load Detergent Powder (Carton)"
              price={600.99}
              originalPrice={800.99}
              discountLabel="50% OFF"
              weight="2 Kg"
              quantity={1}
            />
            <ProductCard
              image="https://askdemo-c24d7.web.app/assets/small/7.jpg"
              title="Surf Excel Matic Top Load Detergent Powder (Carton)"
              price={600.99}
              originalPrice={800.99}
              discountLabel="50% OFF"
              weight="2 Kg"
              quantity={1}
            />
            <ProductCard
              image="https://askdemo-c24d7.web.app/assets/small/1.jpg"
              title="Surf Excel Matic Top Load Detergent Powder (Carton)"
              price={600.99}
              originalPrice={800.99}
              discountLabel="50% OFF"
              weight="2 Kg"
              quantity={1}
            />
            <ProductCard
              image="https://askdemo-c24d7.web.app/assets/small/6.jpg"
              title="Surf Excel Matic Top Load Detergent Powder (Carton)"
              price={600.99}
              originalPrice={800.99}
              discountLabel="50% OFF"
              weight="2 Kg"
              quantity={1}
            />
          </IonGrid>
        </section>

        <IonRow className='px-2 py-3'>
          <IonImg src="/images/home/hygienic.jpg" alt="hygienic" className='rounded-md' />
        </IonRow>

        <section className='p-3 space-y-6 bg-[#F4F5F8]'>
          <IonRow className='flex justify-between items-center gap-2'>
            <IonText className='text-lg font-semibold'>
              Best Selling
            </IonText>
            <IonText className='bg-[#e3641d] text-white rounded-md px-3 py-1 text-sm'>
              View All
            </IonText>
          </IonRow>

          <IonGrid className='flex flex-col gap-3'>
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

        <IonRow className='p-2'>
          <IonImg src="/images/home/products.jpg" alt="products" />
        </IonRow>
      </IonContent>

      {/* Cart modal */}
      <IonModal
        ref={cartModal}
        trigger='open-modal'
        onWillDismiss={(event) => onWillDismiss(event)}
        className='Modalbg-color !z-[888]'
        style={{ zIndex: 1000 }}
      >
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
            id='proceed-modal'
            className='fixed bottom-0 bg-[#E76224] w-full left-0 ion-padding justify-between py-3 border-t border-gray-200 cursor-pointer'
            onClick={openLoginModal}
          >
            <IonText className='text-white font-semibold flex items-center gap-1'>
              <AiOutlineShoppingCart /> Proceed to Checkout
            </IonText>
            <IonText className='text-white font-semibold flex items-center gap-1'>
              $433,00 <FaArrowRight />
            </IonText>
          </IonRow>
        </IonContent>
      </IonModal>

      {/* login modal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </IonPage>
  );
};

export default Home;
