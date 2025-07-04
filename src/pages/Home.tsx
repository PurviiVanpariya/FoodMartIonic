import { IonButton, IonButtons, IonContent, IonGrid, IonHeader, IonImg, IonInput, IonItem, IonModal, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { IoMenu } from 'react-icons/io5';
import { BsCart3 } from "react-icons/bs";

import Header from '../components/header';
import ProductCard from '../components/home/ProductCards';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import './Home.css';

const Home: React.FC = () => {
 

  return (
    <IonPage>
      <Header
        icon={IoMenu}
        cartIcon={BsCart3}
        SubHeading='Delivery Location'
        Heading='Bengaluru, India'
      />
      <IonContent fullscreen>
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

      {/* <ExploreContainer /> */}
    </IonPage>
  );
};

export default Home;
