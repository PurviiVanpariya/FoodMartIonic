import { IonCol, IonContent, IonPage, IonRow, IonText } from '@ionic/react'
import React, { useState } from 'react'
import Header from '../../components/header'
import { FaPlus } from 'react-icons/fa6'
import { IoHomeOutline } from 'react-icons/io5'
import { RiDeleteBin6Line, RiShareForwardLine } from "react-icons/ri";
import { LiaEdit } from "react-icons/lia";
import { BiShoppingBag } from 'react-icons/bi';
import NoteModal from './NoteModal'

const addressData = [
    {
        type: "Home",
        icon: IoHomeOutline,
        address: "Osahan House, Jawaddi Kalan, Ludhiana, Punjab 141002, India"
    },
    {
        type: "Work",
        icon: BiShoppingBag,
        address: "NCC, Model Town Rd, Pritm Nagar, Model Town, Ludhiana, Punjab 141002, India"
    },
    {
        type: "Other",
        icon: RiShareForwardLine,
        address: "GTTT, Model Town Rd, Pritm Nagar, Model Town, Ludhiana, Punjab 141002, India"
    }
];

const AddressModal = ({ showAddress = false }) => {
    const [showNoteModal, setShowNoteModal] = useState(false);

    const onNoteModalClick = () => {
        setShowNoteModal(true);
    };

    return (
        <>
            {
                showAddress && (
                    <IonPage className='bg-white'>
                        <Header Heading='My Address' cartIcon={FaPlus} onCartClick={onNoteModalClick} cartClassName='after:hidden'/>
                        <IonContent className='bg-color ion-padding'>
                            {
                                addressData.map((address, index) => (
                                    <IonRow key={index} className='bg-white p-4 rounded-xl shadow grid grid-cols-6 mb-4'>
                                        <IonCol className='col-span-1'>
                                            <address.icon className='text-4xl' />
                                        </IonCol>
                                        <IonCol className='col-span-5 flex flex-col'>
                                            <IonText className='font-semibold text-xl'>{address.type}</IonText>
                                            <IonText className='text-sm text-primary w-full pt-1'>{address.address}</IonText>
                                            <IonRow className='flex gap-3 pt-3'>
                                                <IonText onClick={onNoteModalClick} className='text-sm text-blue-800 uppercase flex items-center gap-2'>
                                                    <LiaEdit /> Edit
                                                </IonText>
                                                <IonText className='text-sm text-red-600 uppercase flex items-center gap-2'>
                                                    <RiDeleteBin6Line /> Delete
                                                </IonText>
                                            </IonRow>
                                        </IonCol>
                                    </IonRow>
                                ))
                            }
                        </IonContent>
                        <NoteModal showNoteModal={showNoteModal} setShowNoteModal={setShowNoteModal} />
                    </IonPage>
                )
            }
        </>
    )
}

export default AddressModal;
