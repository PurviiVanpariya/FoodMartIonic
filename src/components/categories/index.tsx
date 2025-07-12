import { IonCol, IonContent, IonImg, IonPage, IonRow, IonText } from '@ionic/react';
import Header from '../header';
import { IoAdd } from 'react-icons/io5';
const categoryData = [
  {
    img: 'https://askdemo-c24d7.web.app/assets/cate/1.png',
    discount: 'Up to 71% OFF',
    title: 'Grocery & Staples',
    description: 'Baby Food, Diapers & Wipes...',

  },
  {
    img: 'https://askdemo-c24d7.web.app/assets/cate/2.png',
    discount: 'Up to 25% OFF',
    title: 'Vegetables & Fruits',
    description: 'Baby Food, Diapers & Wipes...',

  },
  {
    img: 'https://askdemo-c24d7.web.app/assets/cate/3.png',
    discount: 'Up to 65% OFF',
    title: 'Personal Care',
    description: 'Baby Food, Diapers & Wipes...',

  },
  {
    img: 'https://askdemo-c24d7.web.app/assets/cate/4.png',
    discount: 'Up to 65% OFF',
    title: 'Household Items',
    description: 'Baby Food, Diapers & Wipes...',

  },
  {
    img: 'https://askdemo-c24d7.web.app/assets/cate/5.png',
    discount: 'Up to 65% OFF',
    title: 'Biscuits, Snacks & Chocolates',
    description: 'Baby Food, Diapers & Wipes...',

  },
  {
    img: 'https://askdemo-c24d7.web.app/assets/cate/6.png',
    discount: 'Up to 23% OFF',
    title: 'Beverages',
    description: 'Baby Food, Diapers & Wipes...',

  },
  {
    img: 'https://askdemo-c24d7.web.app/assets/cate/7.png',
    discount: 'Up to 78% OFF',
    title: 'Breakfast & Dairy',
    description: 'Baby Food, Diapers & Wipes...',

  },
  {
    img: 'https://askdemo-c24d7.web.app/assets/cate/8.png',
    discount: 'Up to 33% OFF',
    title: 'App Exclusive',
    description: 'Baby Food, Diapers & Wipes...',

  },
  {
    img: 'https://askdemo-c24d7.web.app/assets/cate/9.png',
    discount: 'Up to 73% OFF',
    title: 'Noodles, Sauces & Instant Food',
    description: 'Baby Food, Diapers & Wipes...',

  },
  {
    img: 'https://askdemo-c24d7.web.app/assets/cate/10.png',
    discount: 'Up to 51% OFF',
    title: 'Furnishing & Home Needs',
    description: 'Baby Food, Diapers & Wipes...',

  },
  {
    img: 'https://askdemo-c24d7.web.app/assets/cate/11.png',
    discount: 'Up to 34% OFF',
    title: 'Baby Care',
    description: 'Baby Food, Diapers & Wipes...',
  }
];

const Categories = () => {
  return (
    <IonPage>
      <Header
        cartIcon={IoAdd}
        Heading='Categories'
        cartClassName="after:hidden"
        searchbar={false}
      />
      <IonContent className='bg-color ion-padding'>
        {categoryData.map((item, index) => (
          <IonRow
            key={index}
            className="bg-white rounded-xl shadow ion-padding grid grid-cols-5 mb-4"
          >
            <IonCol className='col-span-2 flex items-center justify-center'>
              <IonImg src={item.img} className='h-20 w-auto object-contain'></IonImg>
            </IonCol>
            <IonCol className='col-span-3'>
              <IonText className='text-sm text-green-600 block'>{item.discount}</IonText>
              <IonText className='text-lg font-bold block'>{item.title}</IonText>
              <IonText className='text-sm text-primary block'>{item.description}</IonText>
            </IonCol>
          </IonRow>
        ))}
      </IonContent>
    </IonPage>
  )
}

export default Categories
