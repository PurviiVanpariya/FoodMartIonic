import {
  IonHeader,
  IonMenu,
  IonContent,
  IonRow,
  IonText,
  IonMenuButton,
  IonSearchbar,
  IonImg,
  IonList,
  IonIcon,
  IonLabel,
  IonItem,
} from '@ionic/react';
import { card, cart, clipboard, grid, heart, home, list, person, pricetag, location } from 'ionicons/icons';
import { useState } from 'react';
import { IconType } from 'react-icons';
import "./Header.css";

type HeaderProps = {
  icon?: IconType;
  cartIcon?: IconType;
  SubHeading?: string;
  Heading?: string;
  searchbar?: boolean;
  cartClassName?: string
  onMenuClick?: () => void;
};

const listItem = [
  { icon: home, label: 'Homepage' },
  { icon: list, label: 'Categories' },
  { icon: grid, label: 'Shop List' },
  { icon: pricetag, label: 'Single Product' },
  { icon: cart, label: 'Shopping Cart' },
  { icon: card, label: 'Checkout' },
  { icon: person, label: 'My Profile' },
  { icon: location, label: 'My Address' },
  { icon: clipboard, label: 'Order List' },
  { icon: heart, label: 'About Us' }
]
const Header = ({ icon, SubHeading, Heading, cartIcon, searchbar = false, cartClassName , onMenuClick}: HeaderProps) => {

  const [searchTerm,] = useState("");

  return (
    <>
      <IonMenu contentId="main-content" className='!z-[999999]'  swipeGesture={false} >
        <IonImg
          src="https://askdemo-c24d7.web.app/assets/user.jpg"
          className='px-3 py-4 profile-img'
          alt="The Wisconsin State Capitol building in Madison, WI at night"
        />
        <IonContent className="ion-padding">
          <IonRow>
            <IonText className="font-semibold text-[22px]">Askbootstrap</IonText>
            <IonText className="text-[#86888F] mb-6">iamosahan@gmail.com</IonText>
          </IonRow>
          <IonList>
            {listItem.map((item, index) => (
              <IonItem
                key={index}
                lines="none"
                button
                className="text-[#86888F] listMenu hover:bg-zinc-100 transition-all duration-500 rounded-md"
              >
                <IonIcon icon={typeof item.icon === 'string' ? item.icon : undefined} slot="start" className="text-xl" />
                <IonLabel className='font-semibold'>{item.label}</IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonContent>
      </IonMenu>
      <IonHeader id='main-content' className="relative max-h-[130px] h-fit size-full bg-[#003049] py-2 px-3 flex flex-wrap gap-x-5 !items-center !shadow-none">
        {icon && (
          <IonMenuButton className='text-white' onClick={onMenuClick}></IonMenuButton>
        )}
        <IonRow className="flex flex-col">
          <IonText className="text-white text-xs">{SubHeading}</IonText>
          <IonText className="text-white text-base font-semibold">{Heading}</IonText>
        </IonRow>
        {cartIcon && (
          <IonRow className="ms-auto" id="open-modal">
            <IonText className={` ${cartClassName} text-2xl text-white relative after:absolute after:content-['3'] after:size-4 after:bg-orange-600 after:rounded-full after:text-white after:text-xs after:grid after:place-items-center after:-top-2 after:-right-2`}>
              {cartIcon({ size: '1em' })}
            </IonText>
          </IonRow>
        )}
        {
          searchbar && (
            <IonSearchbar
              style={{ "--box-shadow": "transparent", borderRadius: '22px !important' }}
              className="h-10 !rounded-md !p-0 my-2"
              placeholder="Search.."
              value={searchTerm}
              debounce={300}
            />
          )
        }
      </IonHeader>
    </>
  );
};

export default Header;