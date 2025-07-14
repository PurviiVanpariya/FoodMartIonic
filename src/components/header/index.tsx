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
import { card, cart, clipboard, grid, heart, home, list, person, pricetag, location, mail, help, sad } from 'ionicons/icons';
import { useState } from 'react';
import { PiNotePencilDuotone } from "react-icons/pi";
import { IconType } from 'react-icons';
import "./Header.css";
import { GoArrowLeft } from "react-icons/go";
import { useLocation } from 'react-router';

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
  { icon: heart, path: "/about", label: 'About Us' },
  { icon: mail, path: "/contact-us", label: 'Contact Us' },
  { icon: help, path: "/faq", label: 'FAQ' },
  { icon: sad, path: "/not-found", label: '404 Page Not Found' }
]

const Header = ({ SubHeading, Heading, cartIcon, searchbar = false, cartClassName, onCartClick, EditIcon = false, onNoteClick, showBackButton, onBackClick }: HeaderProps) => {

  const [searchTerm,] = useState("");
  const router = useIonRouter();
  const loc = useLocation();

  const handleNavigation = (path: string) => {
    router.push(path, "root");
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
            {listItem.map((item, index) => {
              const isActive = loc.pathname === item.path;

              return (
                <IonItem
                  key={index}
                  button
                  onClick={() => handleNavigation(item.path)}
                  lines="none"
                  className={`listMenu transition-all duration-500 rounded-md ${isActive ? 'bg-[#E9612520] hover:bg-[#E9612530] !text-[#E96125] hover:!text-[#E96125]' : 'hover:bg-zinc-50'}`}
                >
                  <IonIcon icon={typeof item.icon === 'string' ? item.icon : undefined} slot="start" className={`text-primary text-xl ${isActive && "!text-[#E96125]"}`} />
                  <IonLabel className={`font-semibold ${isActive && "!text-[#E96125]"}`}>{item.label}</IonLabel>
                </IonItem>
              );
            })}
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