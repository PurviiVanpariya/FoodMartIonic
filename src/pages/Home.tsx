import { IonContent, IonGrid, IonImg, IonPage, IonRow, IonText } from '@ionic/react';
import './Home.css';
import Header from '../components/header';
import { IoMenu } from 'react-icons/io5';
import { BsCart3 } from "react-icons/bs";
import ProductCard from '../components/home/ProductCards';

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
        <IonRow>
          <IonImg src="/images/home/slider1.jpg" alt="slider1" />
        </IonRow>

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
        <IonRow className='p-2'>
          <IonImg src="/images/home/products.jpg" alt="products" />
        </IonRow>
      </IonContent>
      {/* <ExploreContainer /> */}
    </IonPage>
  );
};

export default Home;
