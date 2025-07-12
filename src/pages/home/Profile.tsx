import { IonCol, IonContent, IonImg, IonPage, IonRow, IonText } from '@ionic/react'
import Header from '../../components/header'
import { TfiMenuAlt } from "react-icons/tfi";
import { IoMdPaperPlane } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoLocationOutline, IoWalletOutline } from "react-icons/io5";
import { FaRegHeart } from 'react-icons/fa6';
import { LuLock } from "react-icons/lu";
import LoginModal from './LoginModal';
import { useState } from 'react';
import AddressModal from './AddressModal';
import OrderList from './OrderList';
import NoteModal from './NoteModal';
import WishListModal from './WishListModal';
import WalletModal from './WalletModal';
import EditProfile from './EditProfile';

const Profile = ({ showProfile = false }) => {
    const [showLoginModal, setShowLoginModal] = useState(false)
    const [showAddressModal, setShowAddressModal] = useState(false)
    const [showOrderListModal, setShowOrderListModal] = useState(false)
    const [showNoteModal, setShowNoteModal] = useState(false);
    const [showWishListModal, setShowWishListModal] = useState(false)
    const [showWalletModal, setShowWalletModal] = useState(false)
    const [showEditProfileModal, setShowEditProfileModal] = useState(false)

    const onWishListClick = () => {
        setShowWishListModal(true)
    }
    const onOrderListClick = () => {
        setShowOrderListModal(true)
    }
    const onLoginClick = () => {
        setShowLoginModal(true)
    }
    const onAddressClick = () => {
        setShowAddressModal(true)
    }
    const onWalletModalClick = () => {
        setShowWalletModal(true)
    }
     const onEditProfileModalClick = () => {
        setShowEditProfileModal(true)
    }


    return (
        <>
            {
                showProfile && (
                    <IonPage className='bg-white'>
                        <Header Heading='My Profile' cartIcon={TfiMenuAlt} cartClassName='after:hidden' />
                        <IonContent className='ion-padding !bg-[#F4F5F8] bg-color space-y-6'>
                            <IonRow className='bg-white border shadow pt-10 pb-3 rounded-xl'>
                                <IonRow>
                                    <IonImg src='https://askdemo-c24d7.web.app/assets/user/1.jpg' className='profileImg h-44 mx-auto'></IonImg>
                                    <IonText className='w-full font-semibold text-2xl pt-5 pb-2 text-center'>Gurdeep Osahan</IonText>
                                    <IonText className='w-full text-primary text-base text-center'>iamosahan@gmail.com</IonText>
                                </IonRow>
                                <IonRow className='border-y border-gray-200 w-full flex gap-2 mt-8'>
                                    <IonCol className='p-4 text-center flex flex-col gap-3' onClick={onAddressClick}>
                                        <IonText className='text-primary'><IoMdPaperPlane className='mx-auto' /></IonText>
                                        <IonText className='text-primary text-sm w-full text-center'>Edit Address</IonText>
                                    </IonCol>
                                    <IonCol className='border-l p-4 text-center flex flex-col gap-3' onClick={onEditProfileModalClick}>
                                        <IonText className='text-primary'><CgProfile className='mx-auto' /></IonText>
                                        <IonText className='text-primary text-sm w-full text-center'>Edit Profile</IonText>
                                    </IonCol>
                                </IonRow>
                                <IonRow onClick={onWalletModalClick} className='flex justify-between w-full items-center pt-4 px-8'>
                                    <IonText className='font-semibold text-[#003049] text-base text-center flex items-center gap-2'><IoWalletOutline /> My Balance:</IonText>
                                    <IonText className='text-[#003049] text-base text-center font-semibold'>$24,000</IonText>
                                </IonRow>
                            </IonRow>
                            <IonRow className='bg-white shadow !rounded-xl !mb-16'>
                                <IonRow className='p-4 bg-[#003049] w-full rounded-t-xl'>
                                    <IonText className='text-white flex items-center gap-2'><CgProfile /> My Profile</IonText>
                                </IonRow>
                                <IonRow onClick={onAddressClick} className='p-4 bg-white w-full border border-gray-200 hover:bg-gray-100 transition-all duration-200'>
                                    <IonText className='text-primary flex items-center gap-2'><IoLocationOutline /> My Address</IonText>
                                </IonRow>
                                <IonRow onClick={onWishListClick} className='p-4 bg-white w-full border border-gray-200 hover:bg-gray-100 transition-all duration-200'>
                                    <IonText className='text-primary flex items-center gap-2'><FaRegHeart /> Wish List</IonText>
                                </IonRow>
                                <IonRow onClick={onOrderListClick} className='p-4 bg-white w-full border border-gray-200 hover:bg-gray-100 transition-all duration-200'>
                                    <IonText className='text-primary flex items-center gap-2'><TfiMenuAlt /> Order List</IonText>
                                </IonRow>
                                <IonRow onClick={onWalletModalClick} className='p-4 bg-white w-full border border-gray-200 hover:bg-gray-100 transition-all duration-200 rounded-b-xl'>
                                    <IonText className='text-primary flex items-center gap-2'><IoWalletOutline /> My Wallet</IonText>
                                </IonRow>
                            </IonRow>
                            <IonRow onClick={onLoginClick}
                                className='fixed bottom-0 bg-[#E76224] w-full left-0 ion-padding justify-center py-3 border-t border-gray-200 cursor-pointer'
                            >
                                <IonText className='text-white font-semibold flex items-center gap-1'>
                                    <LuLock /> LOGOUT
                                </IonText>
                            </IonRow>
                        </IonContent>
                        <LoginModal showLogin={showLoginModal} />
                        <AddressModal showAddress={showAddressModal} />
                        <OrderList showOrderList={showOrderListModal} />
                        <NoteModal showNoteModal={showNoteModal} setShowNoteModal={setShowNoteModal} source="profile" />
                        <WishListModal showWishListModal={showWishListModal} />
                        <WalletModal showWalletModal={showWalletModal}/>
                        <EditProfile showEditProfileModal={showEditProfileModal} setShowEditProfileModal={setShowAddressModal}/>
                    </IonPage>
                )
            }
        </>
    )
}

export default Profile
