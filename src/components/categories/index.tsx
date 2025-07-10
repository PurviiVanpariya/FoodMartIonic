import { IonPage } from '@ionic/react';
import Header from '../header';
import { IoAdd, IoMenu } from 'react-icons/io5';

const Categories = () => {
  return (
    <IonPage>
       <Header
        cartIcon={IoAdd}
        Heading='Categories'
        cartClassName="after:hidden"
        searchbar={false}
        // onCartClick={onCartClick}
      />
      categories
    </IonPage>
  )
}

export default Categories
