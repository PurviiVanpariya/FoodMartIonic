import { IonContent, IonGrid, IonImg, IonPage, IonRefresher, IonRefresherContent, IonRow, IonText, RefresherEventDetail } from '@ionic/react';
import { IoMenu } from 'react-icons/io5';
import { BsCart3 } from "react-icons/bs";

import Header from '../../components/header';
import ProductCard from '../../components/home/ProductCards';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import './Home.css';
import { useRef, useState } from 'react';

import { OverlayEventDetail } from '@ionic/react/dist/types/components/react-component-lib/interfaces';
import CartModal from './CartModal';
import ListModal from './ListModal';
import ProductModal from './ProductModal';
import NoteModal from './NoteModal';
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
    isBanana: true,
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

const Home: React.FC = () => {

  const [showCart, setShowCart] = useState(false);

  const onCartClick = () => {
    setShowCart(true);
  };

  const [showNoteModal, setShowNoteModal] = useState(false);

  const onNoteModalClick = () => {
    setShowNoteModal(true);
  };

  const [showProductModal, setShowProductModal] = useState(false);

  const onProductModal = () => [
    setShowProductModal(true)
  ]
  const [showList, setShowList] = useState(false);

  const onListClick = () => {
    setShowList(true);
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
        cartIcon={BsCart3}
        SubHeading='Delivery Location'
        Heading='Bengaluru, India'
        searchbar={true}
        onCartClick={onCartClick}
        EditIcon={true}
        onNoteClick={onNoteModalClick}
      />
      <IonContent>
        <IonRefresher slot="fixed" pullFactor={0.5} pullMin={100} pullMax={200} onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <Swiper className="mySwiper">
          <SwiperSlide>
            <IonImg src="https://askdemo-c24d7.web.app/assets/slider/slider1.jpg" alt="slider1" onClick={onListClick} />
          </SwiperSlide>
          <SwiperSlide>
            <IonImg src="https://askdemo-c24d7.web.app/assets/slider/slider2.jpg" alt="slider2" onClick={onListClick} />
          </SwiperSlide>
        </Swiper>

        <IonGrid className='flex justify-between py-3 px-2'>
          <IonImg src="https://askdemo-c24d7.web.app/assets/ad/1.jpg" alt="discount1" className='w-[49%] rounded-md' />
          <IonImg src="https://askdemo-c24d7.web.app/assets/ad/2.jpg" alt="discount2" className='w-[49%] rounded-md' />
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
            {products.map((product, index) => (
              <ProductCard
                key={index}
                {...product}
                discountLabel={product.isBanana ? "50% OFF" : undefined}
                DiscountClassName={product.isBanana ? "bg-green-500 text-[9px] left-2 w-fit" : undefined}
                onClick={onProductModal}
              />
            ))}
          </IonGrid>
        </section>

        <IonRow className='px-2 py-3'>
          <IonImg src="https://askdemo-c24d7.web.app/assets/ad/3.jpg" alt="hygienic" className='rounded-md' onClick={onListClick} />
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
            {products.map((product, index) => (
              <ProductCard
                key={index}
                className="shadow-md flex bg-white"
                {...product}
                discountLabel={product.isBanana ? "50% OFF" : undefined}
                DiscountClassName={product.isBanana ? "bg-green-500 text-[9px] left-2 w-fit" : undefined}
                onClick={onProductModal}
              />
            ))}
          </IonGrid>
        </section>

        <IonRow className='p-2'>
          <IonImg src="https://askdemo-c24d7.web.app/assets/ad/4.jpg" alt="products" onClick={onListClick} />
        </IonRow>
      </IonContent>
      <CartModal showCart={showCart} />
      <ListModal showList={showList} />
      <ProductModal showProductModal={showProductModal} />
      <NoteModal showNoteModal={showNoteModal} setShowNoteModal={setShowNoteModal} />
    </IonPage>
  );
};

export default Home;
