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
  useIonRouter,
  IonButton,
} from '@ionic/react';
import { card, cart, clipboard, grid, heart, home, list, person, pricetag, location } from 'ionicons/icons';
import { useState } from 'react';
import { PiNotePencilDuotone } from "react-icons/pi";
import { IconType } from 'react-icons';
import "./Header.css";
import { GoArrowLeft } from "react-icons/go";


type HeaderProps = {
  EditIcon?: boolean;
  cartIcon?: IconType;
  SubHeading?: string;
  Heading?: string;
  searchbar?: boolean;
  cartClassName?: string
  onCartClick?: any;
  onNoteClick?: any;
  onBackClick?: any;
  showBackButton?: boolean;
};

const Header = ({ SubHeading, Heading, cartIcon, searchbar = false, cartClassName, onCartClick, EditIcon = false, onNoteClick, showBackButton, onBackClick }: HeaderProps) => {

  const [searchTerm,] = useState("");

  const listItem = [
    { icon: home, path: "/home", label: 'Homepage' },
    { icon: list, path: "/categories", label: 'Categories' },
    { icon: grid, path: "/shoplist", label: 'Shop List' },
    { icon: pricetag, path: "/single-product", label: 'Single Product' },
    { icon: cart, path: "/cart", label: 'Shopping Cart' },
    { icon: card, path: "/checkout", label: 'Checkout' },
    { icon: person, path: "/my-profile", label: 'My Profile' },
    { icon: location, path: "/my-address", label: 'My Address' },
    { icon: clipboard, path: "/order-list", label: 'Order List' },
    { icon: heart, path: "/about", label: 'About Us' }
  ]

  const router = useIonRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };


  return (
    <>

      <IonMenu contentId="main-content">
        <IonImg
          src="https://askdemo-c24d7.web.app/assets/user.jpg"
          className='px-3 py-4 profile-img'
          alt="The Wisconsin State Capitol building in Madison, WI at night"
        />
        <IonContent className="ion-padding">
          <IonRow>
            <IonText className="font-semibold text-[22px]">Askbootstrap</IonText>
            <IonText className="text-primary mb-6">iamosahan@gmail.com</IonText>
          </IonRow>
          <IonList>
            {listItem.map((item, index) => (
              <IonItem
                key={index}
                button
                onClick={() => handleNavigation(item.path)}
                lines="none"
                className="text-primary listMenu hover:bg-zinc-100 transition-all duration-500 rounded-md"
              >
                <IonIcon icon={typeof item.icon === 'string' ? item.icon : undefined} slot="start" className="text-xl" />
                <IonLabel className='font-semibold'>{item.label}</IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonContent>
      </IonMenu>

      <IonHeader id='main-content' className="relative max-h-[130px] h-fit size-full bg-[#003049] py-2 px-3 flex flex-wrap gap-x-5 !items-center !shadow-none">
        {showBackButton ? (
          <IonButton className='text-white !mx-0 back-button' onClick={onBackClick}>
            <GoArrowLeft className='!w-5 !h-5' />
          </IonButton>
        ) : (
          <IonMenuButton className='text-white'></IonMenuButton>
        )}
        <IonRow className="flex flex-col">
          <IonText className="text-white text-xs">{SubHeading}</IonText>
          <IonRow className='gap-2 items-center'>
            <IonText className="text-white text-base font-semibold">{Heading}</IonText>
            {
              EditIcon && (
                <PiNotePencilDuotone className='text-white' onClick={onNoteClick} />
              )
            }
          </IonRow>
        </IonRow>
        {cartIcon && (
          <IonRow className="ms-auto" id="open-modal" onClick={onCartClick}>
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